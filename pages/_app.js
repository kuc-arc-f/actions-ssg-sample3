
import React from 'react'
import App from 'next/app'
//import "../styles/content.css"
//import "../styles/content_type.css"
import "../styles/main.css"
import "../styles/theme.css"
import "../styles/type5.css"

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }
  render () {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Component {...pageProps} />
      </div>
    )
  }
}
