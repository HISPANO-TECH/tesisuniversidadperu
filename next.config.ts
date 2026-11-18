import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Conserva las URLs del sitio original (WordPress usa barra final).
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // "/entrada/" era una plantilla de demostración olvidada en WordPress (lorem ipsum).
  async redirects() {
    return [{ source: "/entrada", destination: "/", permanent: true }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
