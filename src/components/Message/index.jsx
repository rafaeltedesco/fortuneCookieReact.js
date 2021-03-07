import React, {Component} from 'react'

class Message extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="message">
        {this.props.message}
      </div>
    )
  }
}

export default Message