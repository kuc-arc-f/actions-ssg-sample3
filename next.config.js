//
module.exports = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/actions-ssg-sample3" : "",
  env: {
    MY_BASE_PATH: process.env.NODE_ENV === "production" ? "/actions-ssg-sample3" : "",    
  },   
}