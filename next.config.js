const withExportImages = require('next-export-optimize-images')

module.exports = withExportImages({
  images: {
    domains: ["www.bogdandraghia.com","172.20.0.5","s3-provider-strapi-portofolio.s3.eu-west-3.amazonaws.com"],
  },
})