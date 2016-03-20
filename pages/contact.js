import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import { prune, include as include } from 'underscore.string'
import Navigation from 'components/Navigation'
import PageHeading from 'components/PageHeading'
import Icon from 'components/Icon'

class Contact extends React.Component {
  render () {
    return (
      <DocumentTitle title={`Contact | ${config.siteTitle}`}>
        <div>
          <Navigation />
          <PageHeading headingText="Let's Talk" metaText="Message | Socalize | Mail" />

          <h3>Fastest</h3>
          <div className="row">
            <div className="contact-option">
              <a href="http://telegram.me/michaeljdeeb"><Icon icon="telegram" /></a>
              <p><a href="http://telegram.me/michaeljdeeb">Telegram | @michaeljdeeb</a></p>
            </div>
          </div>
          <hr />

          <h3>Faster</h3>
          <div className="row">
            <div className="contact-option">
              <a href="http://www.linkedin.com/in/michaeljdeeb/"><Icon icon="linkedin" /></a>
              <p><a href="http://www.linkedin.com/in/michaeljdeeb/">LinkedIn | Michael Deeb</a></p>
            </div>

            <div className="contact-option">
              <a href="https://github.com/michaeljdeeb"><Icon icon="github" /></a>
              <p><a href="https://github.com/michaeljdeeb">GitHub | @michaeljdeeb</a></p>
            </div>
            <div className="contact-option">
              <a href="http://twitter.com/michaeljdeeb"><Icon icon="twitter" /></a>
              <p><a href="http://twitter.com/michaeljdeeb">Twitter | @michaeljdeeb</a></p>
            </div>
          </div>
          <hr />

          <h3>Fast</h3>
          <form className="contact-form">
            <div className="row">
              <div className="input-icon">N</div>
              <input placeholder="Name" />
            </div>
            <div className="row">
              <div className="input-icon">N</div>
              <input placeholder="Email" />
            </div>
            <div className="row">
              <div className="input-icon">N</div>
              <input placeholder="Subject" />
            </div>
            <div className="row">
              <div className="textarea-icon">N</div>
              <textarea rows="5" placeholder="Message"></textarea>
            </div>
            <button type="submit"><span>Submit</span></button>
          </form>

          <svg>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#09f', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#2ac9fa', stopOpacity: 1 }} />
              </linearGradient>
            </svg>
        </div>
      </DocumentTitle>
    )
  }
}

Contact.propTypes = {
  route: React.PropTypes.object,
}

export default Contact
