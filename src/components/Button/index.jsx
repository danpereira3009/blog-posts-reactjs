import { Component } from "react";

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