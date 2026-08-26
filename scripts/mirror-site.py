"""
Mirrors www.newburyfranklin.com (pages + assets) into ../site-mirror
for use as a reference/starting point while rebuilding the site.

Stdlib only (no pip installs required). Polite by default: sequential
requests with a short delay between them.
"""

import os
import re
import time
import urllib.request
import urllib.parse
from html.parser import HTMLParser

BASE = "https://www.newburyfranklin.com"
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "site-mirror")
MAX_PAGES = 300
DELAY_SECONDS = 0.3
USER_AGENT = "Mozilla/5.0 (compatible; NewburyFranklinArchiveBot/1.0; +site owner asset export for rebuild)"

domain = urllib.parse.urlparse(BASE).netloc
alt_domain = domain[4:] if domain.startswith("www.") else "www." + domain
PAGE_EXTENSIONS = ("", ".html", ".htm")


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for attr in ("href", "src"):
            if attr in attrs and attrs[attr]:
                self.links.append(attrs[attr])
        if attrs.get("srcset"):
            for part in attrs["srcset"].split(","):
                url = part.strip().split(" ")[0]
                if url:
                    self.links.append(url)


def is_same_site(url):
    return urllib.parse.urlparse(url).netloc in ("", domain, alt_domain)


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=20) as resp:
        return resp.read(), resp.headers.get_content_type()


def local_path_for(url):
    parsed = urllib.parse.urlparse(url)
    path = parsed.path
    if path == "" or path.endswith("/"):
        path += "index.html"
    path = path.lstrip("/")
    if parsed.query:
        root, ext = os.path.splitext(path)
        safe_query = re.sub(r"[^A-Za-z0-9_-]", "_", parsed.query)[:60]
        path = f"{root}__{safe_query}{ext}"
    return os.path.normpath(os.path.join(OUT_DIR, path))


def save(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "wb") as f:
        f.write(data)


def extract_css_urls(css_text, base_url):
    found = []
    for raw in re.findall(r'url\(([^)]+)\)', css_text):
        u = raw.strip("'\" ")
        if not u or u.startswith("data:"):
            continue
        found.append(urllib.parse.urljoin(base_url, u))
    return found


def crawl():
    visited_pages = set()
    queue = [BASE + "/"]
    asset_queue = set()
    pages_done = 0

    while queue and pages_done < MAX_PAGES:
        url = queue.pop(0).split("#")[0]
        if url in visited_pages:
            continue
        visited_pages.add(url)
        try:
            data, ctype = fetch(url)
        except Exception as e:
            print(f"FAILED page {url}: {e}")
            continue

        pages_done += 1
        save(local_path_for(url), data)
        print(f"[{pages_done}] page  {url}")

        if ctype and "html" in ctype:
            text = data.decode("utf-8", errors="ignore")
            parser = LinkParser()
            parser.feed(text)
            for link in parser.links:
                full = urllib.parse.urljoin(url, link).split("#")[0]
                if not full.startswith("http") or not is_same_site(full):
                    continue
                ext = os.path.splitext(urllib.parse.urlparse(full).path)[1].lower()
                if ext in PAGE_EXTENSIONS:
                    if full not in visited_pages and full not in queue:
                        queue.append(full)
                else:
                    asset_queue.add(full)
        time.sleep(DELAY_SECONDS)

    print(f"\nPages downloaded: {pages_done}")
    print(f"Assets queued: {len(asset_queue)}")

    downloaded_assets = 0
    css_files = []
    for url in sorted(asset_queue):
        try:
            data, ctype = fetch(url)
        except Exception as e:
            print(f"FAILED asset {url}: {e}")
            continue
        save(local_path_for(url), data)
        downloaded_assets += 1
        print(f"[{downloaded_assets}] asset {url}")
        if url.lower().endswith(".css") or (ctype and "css" in ctype):
            css_files.append((url, data))
        time.sleep(DELAY_SECONDS)

    # Second pass: pull assets referenced only from inside CSS (fonts, bg images)
    extra_assets = set()
    for url, data in css_files:
        text = data.decode("utf-8", errors="ignore")
        for asset_url in extract_css_urls(text, url):
            if is_same_site(asset_url) and asset_url not in asset_queue:
                extra_assets.add(asset_url)

    for url in sorted(extra_assets):
        try:
            data, _ = fetch(url)
        except Exception as e:
            print(f"FAILED css-referenced asset {url}: {e}")
            continue
        save(local_path_for(url), data)
        downloaded_assets += 1
        print(f"[{downloaded_assets}] css-asset {url}")
        time.sleep(DELAY_SECONDS)

    print(f"\nTotal assets downloaded: {downloaded_assets}")
    print(f"Output dir: {os.path.abspath(OUT_DIR)}")


if __name__ == "__main__":
    crawl()
