import { Component } from "react";
import P from 'prop-types'

export default class Button extends Component {
    render() {
        return (
            <button
            className="btn"
            onClick={this.props.onClick}
            disabled={this.props.disabled}
            >{this.props.text}</button>
        )
    }
}

Button.defaultProps = {
  disabled: false,
}

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
}
