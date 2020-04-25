const ghPages = !!process.env.NEXTJS_BACKEND_URL

module.exports = {
  'process.env.BACKEND_URL': ghPages ? process.env.NEXTJS_BACKEND_URL : '',
}
