import React from 'react'

class PageHeading extends React.Component {
  render () {
    return (
      <header>
        <h1 className="no-margin-padding">{this.props.headingText}</h1>
        <p className="meta">{this.props.metaText}</p>
        <hr />
      </header>
    )
  }
}

PageHeading.propTypes = {
  headingText: React.PropTypes.string.isRequired,
  metaText: React.PropTypes.string.isRequired,
}

export default PageHeading
