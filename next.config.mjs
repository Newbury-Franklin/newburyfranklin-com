/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Static export can't run Next's Image Optimization server (it needs a
    // backend); serve originals as-is instead.
    unoptimized: true,
  },
};

export default nextConfig;
