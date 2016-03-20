import React from 'react'
import { config } from 'config'
import { link } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <div>
        <div className="bio-container">
          <div className="welcome">
              <img
                className="avatar"
                src={link('/selfie.jpg')}
              />
              <span className="statement">Hi!</span>
            </div>
          <div className="welcome-detail">
            <p></p>
            This is filler content. I will eventually write something else here. I just need to check something first.
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default Bio
