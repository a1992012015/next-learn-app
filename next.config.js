/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/auth", destination: "/auth/login", permanent: true }];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pbs.twimg.com", port: "", pathname: "/media/**" },
      { protocol: "https", hostname: "lh3.googleusercontent.com", port: "", pathname: "/a/**" },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/PokeAPI/sprites/master/sprites/pokemon/**"
      }
    ]
  }
};

module.exports = nextConfig;
