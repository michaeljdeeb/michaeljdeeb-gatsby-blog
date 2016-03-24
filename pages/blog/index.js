import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import { prune, include as include } from 'underscore.string'
import Bio from 'components/Bio'
import Navigation from 'components/Navigation'
import PageHeading from 'components/PageHeading'
import Footer from 'components/Footer'

import '../../css/zenburn.css'

class BlogPosts extends React.Component {
  render () {
    const pageLinks = []
    // Sort pages.
    const pages = this.props.route.pages
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path
        const date = access(page, 'data.date')
        const html = page.data.body
        pageLinks.push(
          <li
            key={page.path}
          >
            <h3 className="no-margin-padding"><Link to={link(page.path)}>{title}</Link></h3>
            <p className="meta">{moment(date).format('dddd | MMMM DD YYYY | hh:mm A')}</p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <hr />
          </li>
        )
      }
    })
    return (
      <DocumentTitle title={`Blog | ${config.siteTitle}`}>
        <div className="markdown">
          <PageHeading headingText="Blog" metaText="Learn | Document | Teach" />

          <ul className="recent-posts">
            {pageLinks}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}

BlogPosts.propTypes = {
  route: React.PropTypes.object,
}

export default BlogPosts
