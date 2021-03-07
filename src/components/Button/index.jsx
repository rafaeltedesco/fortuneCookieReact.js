import React, {Component} from 'react'


class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <button onClick={this.props.action}  role="button">
          {this.props.value}
        </button>
      </div>
    )
  }
}

export default Button