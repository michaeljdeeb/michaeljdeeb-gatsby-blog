import React from 'react'
import Icon from 'components/Icon'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <p><a href="#">Back to top <Icon icon="angleup" className="one-em text" /></a></p>
        {/* <div>
          <a href="#">Work Setup</a> | <a href="#">New Mac Setup</a> | <a href="#">Site Stack</a>
        </div> */}
      </footer>
    )
  }
}

export default Footer
