import React from 'react'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'
import { prune, include as include } from 'underscore.string'

export default class Html extends React.Component {
  render () {
    const { favicon, body } = this.props
    let title = DocumentTitle.rewind()
    if (this.props.title) {
      title = this.props.title
    }
    let analytics = ''
    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={link('/styles.css')} />
      analytics = '!function(e,a,t,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=a.createElement(t),s=a.getElementsByTagName(t)[0],o.async=1,o.src=n,s.parentNode.insertBefore(o,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-49663508-2","auto"),ga("send","pageview");'
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <title>{this.props.title}</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <script dangerouslySetInnerHTML={{ __html: analytics }} />
          {cssLink}
        </head>
        <body className="landing-page">
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={link('/bundle.js')} />
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  body: React.PropTypes.string,
  favicon: React.PropTypes.string,
  title: React.PropTypes.string,
}

Html.defaultProps = { body: '' }
