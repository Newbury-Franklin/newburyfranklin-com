/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Static hosts generally serve a directory's index.html when a URL has no
  // file extension (e.g. /earlyeducation/), but won't map /earlyeducation to
  // earlyeducation.html on their own. Trailing slashes keep clean URLs
  // working on a plain file host, not just on Vercel's rewrites.
  trailingSlash: true,
  images: {
    // Static export can't run Next's Image Optimization server (it needs a
    // backend); serve originals as-is instead.
    unoptimized: true,
  },
};

export default nextConfig;
