const normalizeBasePath = (value = "") => {
  if (!value) return "";
  return value.startsWith("/") ? value : `/${value}`;
};

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true
  },
  reactStrictMode: true
};

export default nextConfig;
