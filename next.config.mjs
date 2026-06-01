import { withEditframe } from "@editframe/nextjs-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withEditframe(
  {
    root: "./src",
    cacheRoot: "./src/assets/cache",
  },
  nextConfig,
);
