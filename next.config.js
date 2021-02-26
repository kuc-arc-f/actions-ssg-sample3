//
module.exports = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/actions-ssg-sample3" : "",
  env: {
    CSRF_SECRET : 'secret1234',
    MY_SITE_NAME: "CMS Sample",    
  },
}