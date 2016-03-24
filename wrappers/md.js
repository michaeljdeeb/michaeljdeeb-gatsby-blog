import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'
import ReadNext from '../components/ReadNext'
import { config } from 'config'
import Bio from 'components/Bio'
import PageHeading from 'components/PageHeading'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
        <div className="markdown">
          <PageHeading
            headingText={post.title}
            metaText={moment(post.date).format('dddd | MMMM DD YYYY | hh:mm A')}
          />
          <div dangerouslySetInnerHTML={{ __html: post.body }} />

          <ReadNext post={post} pages={route.pages} />
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
