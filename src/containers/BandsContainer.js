import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import Bands from "../components/Bands"

class BandsContainer extends Component {
  render() {
    return(
      <ul>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand}/>

      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => {
  return {addBand: name => dispatch({type: "ADD_BAND", name}), deleteBand: id => dispatch({type: "DELETE_BAND",  id})}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer); 
