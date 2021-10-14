import React, { Component } from 'react'

// const Band = props => { 
class Band extends Component{
    render(){
        debugger
    return (
        <div>
        <li>{this.props.name}</li>
            <button onClick={()=>this.props.deleteBand(this.props.id)}>Delete</button>
        </div>
    )
}
}

export default Band