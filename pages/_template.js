import React from 'react'
import { Link } from 'react-router'
import { Container } from 'react-responsive-grid'
import { link } from 'gatsby-helpers'
import { config } from 'config'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'
import '../css/main.scss'

class Template extends React.Component {
  render () {
    const { location, children } = this.props

    return (
      <div>
        <Navigation />
        <div className="page">
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
