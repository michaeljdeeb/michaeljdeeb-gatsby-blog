import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'
import ReadNext from '../components/ReadNext'
import { config } from 'config'
import Bio from 'components/Bio'
import PageHeading from 'components/PageHeading'
import Helmet from 'react-helmet'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
        <div className="markdown">
          <Helmet
            title={`${post.title} | ${config.siteTitle}`}
            meta={[
              { name: 'description', content: post.description },
              { name: 'og:site_name', content: config.blogTitle },
              { name: 'og:type', content: 'article' },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:site', content: config.twitterHandle },
              { name: 'twitter:title', content: post.title },
              { name: 'og:title', content: post.title },
              { name: 'og:url', content: config.siteURL + post.path },
              { name: 'twitter:card', content: post.description },
              { name: 'twitter:image', content: config.siteURL + post.path + post.image },
              { name: 'og:image', content: config.siteURL + post.path + post.image },
            ]}
          />
          <PageHeading
            headingText={post.title}
            metaText={moment(post.date).format('dddd | MMMM DD YYYY | hh:mm A')}
          />
          <div dangerouslySetInnerHTML={{ __html: post.body }} />

          <ReadNext post={post} pages={route.pages} />
        </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
