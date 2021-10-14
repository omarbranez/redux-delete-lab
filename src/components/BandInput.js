import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.addBand(this.state.name);
    this.setState({ name: '', })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          Enter a Band:
          <input 
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            value={this.state.name}
            />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput;
