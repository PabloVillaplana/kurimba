import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  /** Redirige el dominio de Vercel y www al dominio principal para evitar contenido duplicado. */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "kurimba.vercel.app" }],
        destination: "https://kurimba.cr/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kurimba.cr" }],
        destination: "https://kurimba.cr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
