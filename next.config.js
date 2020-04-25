const ghPages = !!process.env.NEXTJS_BACKEND_URL

module.exports = {
  assetPrefix: ghPages ? process.env.NEXTJS_BACKEND_URL : '',
  publicRuntimeConfig: {
    basePath: ghPages ? process.env.NEXTJS_BACKEND_URL : ''
  }
}
