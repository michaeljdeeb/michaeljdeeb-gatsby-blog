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
        if (pageLinks.length < 3) {
          pageLinks.push(
            <li
              key={page.path}
            >
              <h3 className="no-margin-padding"><Link to={link(page.path)}>{title}</Link></h3>
              <p className="meta">{moment(date).format('dddd | MMMM DD YYYY | hh:mm A')}</p>
              <p>{body}</p>
            </li>
          )
        }
      }
    })
    return (
      <DocumentTitle title={`Home | ${config.siteTitle}`}>
        <div>
          <PageHeading headingText="Home" metaText="Start | Meet | Embark" />
          <Bio />
          <h2 className="no-margin-padding">Recent Blog Posts</h2>
          <p className="meta">
            Look for a new post here every monthly. If you have something you want me to write
            about, <a href="http://twitter.com/share?url=http://michaeljdeeb.com/blog&text=Hey%20@michaeljdeeb,%20you%20should%20write%20about%20">let me know</a>.
          </p>
          <ul className="recent-posts">
            {pageLinks}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
