const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const withExportImages = require('next-export-optimize-images')

module.exports = withBundleAnalyzer(withExportImages({
  reactStrictMode: true,
  images: {
    domains: [
      "www.bogdandraghia.com",
      "172.20.0.5",
      "s3-provider-strapi-portofolio.s3.eu-west-3.amazonaws.com",
    ],
  },
}));
