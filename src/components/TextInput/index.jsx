import { Component } from "react";

export class TextInput extends Component {
  render() {
  return (

      <input 
        className={this.props.className}
        onChange={this.props.onChange}
        value={this.props.value}
        type="search" 
        placeholder="Faça sua pesquisa"
      />  

    )
  }
}
