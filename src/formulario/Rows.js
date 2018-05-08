import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rows extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
    this.onChange = this.onChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  onChange(e){
    this.setState({inputValue: e.target.value})
  }

  getValue(){
    return this.state.inputValue;
  }

  render(){
    return(
      <div className="Row">
        <label className="Rows-label">{this.props.labelText}</label>
        <input className="Rows-input" type={this.props.inputType} value={this.state.inputValue} onChange={this.onChange} required={this.props.isRequired}/>
      </div>
    );
  }
}

Rows.propTypes = {
  inputType: PropTypes.sting,
  labelText: PropTypes.string,
  isRequired: PropTypes.bool
}

export default Rows;
