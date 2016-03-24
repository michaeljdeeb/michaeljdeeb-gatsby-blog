import React from 'react'
import { config } from 'config'
import { link } from 'gatsby-helpers'

class Navigation extends React.Component {
  showMenu () {
    const navItems = document.querySelectorAll('nav ul li')
    const navArrow = document.querySelector('.mobile-dropdown')
    navArrow.classList.toggle('js-ease-arrow')

    for (let i=0; i<navItems.length; i++) {
      if (i === 0) {
        navItems[i].classList.toggle('js-divider')
      }
      navItems[i].classList.toggle('js-nav-visible')
    }
  }

  render () {
    const navLinks = []
    for (const key in config.navigation) {
      if (config.navigation.hasOwnProperty(key)) {
        if (key === 'resume') {
          navLinks.push(<li key={key}><a href={config.navigation[key]}>résumé</a></li>)
        } else {
          navLinks.push(<li key={key}><a href={config.navigation[key]}>{key}</a></li>)
        }
      }
    }
    return (
      <header>
        <nav role="navigation">
          <div className="wrapper">
            <div className="brand js-brand">
              <a href={config.navigation.home}>{config.blogTitle}</a>
            </div>
            <button className="mobile-dropdown" onClick={this.showMenu}>
              <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" /></svg>
            </button>

            <ul>
              {navLinks}
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navigation
