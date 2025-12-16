import fs from "fs";

const normalizeBasePath = (value = "") => {
  if (!value) return "";
  return value.startsWith("/") ? value : `/${value}`;
};

const hasCustomDomain = (() => {
  try {
    const cname = fs.readFileSync(new URL("./CNAME", import.meta.url), "utf8").trim();
    return Boolean(cname);
  } catch {
    return false;
  }
})();

const basePath = hasCustomDomain
  ? ""
  : normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

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
