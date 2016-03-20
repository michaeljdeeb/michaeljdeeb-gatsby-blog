import React from 'react'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'

export default class Html extends React.Component {
  render () {
    const { favicon, body } = this.props
    let title = DocumentTitle.rewind()
    if (this.props.title) {
      title = this.props.title
    }

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={link('/styles.css')} />
    }

    let viewSource = 'Hey! If you want to see more about this site, check out: URL'
    viewSource = 'console.info(\'' + viewSource + '\')'
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <title>{this.props.title}</title>
          <link rel="shortcut icon" href={favicon} />

          {cssLink}
        </head>
        <body className="landing-page">
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={link('/bundle.js')} />
          <script dangerouslySetInnerHTML={{ __html: viewSource }}></script>
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
