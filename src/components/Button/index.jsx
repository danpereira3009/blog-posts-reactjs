import { Component } from "react";

export default class Button extends Component {
    render() {
        return (
            <button class="btn" onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}