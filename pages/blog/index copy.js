import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import { prune, include as include } from 'underscore.string'
import PageHeading from 'components/PageHeading'


class BlogIndex extends React.Component {
  render () {
    const pageLinks = []
    console.dir(this.props.route)
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path
        const date = access(page, 'data.date')
        const html = page.data.body
        const body = prune(html.replace(/<[^>]*>/g, ''), 350)
        pageLinks.push(
          <li
            key={page.path}
          >
            <h3><Link to={link(page.path)}>{title}</Link></h3>
            <p className="meta">{moment(date).format('dddd | MMMM DD YYYY | hh:mm A')}</p>
            <p>{body}</p>
          </li>
        )
      }
    })

    return (
      <DocumentTitle title={`Blog | ${config.siteTitle}`}>
        <div>
          <PageHeading headingText="Blog" metaText="Learn | Document | Teach" />
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
