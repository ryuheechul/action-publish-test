const ghPages = !!process.env.NEXTJS_BACKEND_URL

module.exports = {
  assetPrefix: ghPages ? process.env.NEXTJS_BACKEND_URL : '',
}
