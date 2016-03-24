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
                src={link('selfie.jpg')}
              />
              <span className="statement">Hi!</span>
            </div>
          <div className="welcome-detail">
            <p>My name is Michael Deeb and I'm a web developer in San Francisco, CA.</p>
            <p>
              Over the years, this website has provided me with a personal project/playground to
              try out various web technologies (currently <a href="https://facebook.github.io/react/">React</a>).
            </p>
            <p>
              Content published to this website is mostly to document things that I think will
              help my future self, but I'm hoping that some of what I write can also benefit others.
              It is also my attempt to own my own content and at least publish redundantly, if not
              solely here.
            </p>
            <p>
              My earliest web design memory was designing a single page for a video game using
              Internet Explorer (I know). After I had completed my creation, I attempted to
              show it to my best friend on his Mac and that's how I discovered cross-browser
              compatibility.
            </p>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default Bio
