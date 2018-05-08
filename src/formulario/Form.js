import React, { Component } from 'react';
import Rows from './Rows';

// Obterner las referencias de otro Componente
// this.refs.nombreComponente.nombreMetodo

class Form extends Component{
  constructor(){
    super();
    this.state={
      labelLegend: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    let passwd = this.refs.password.getValue();
    let passwd1= this.refs.confirmapassword.getValue();
    if(passwd === passwd1){
      this.setState({labelLegend:'Existo y Despues Vivo'});
    }else{
      this.setState({labelLegend: 'Ser o No Ser'});
    }
  }

  render(){
    return(
      <div className="Form">
        <form className="Form-form" onSubmit={this.onSubmit}>
          <h2 className="Form-title">Registration Form</h2>
          <Rows inputType="text" labelText="Nombre" ref="nombre" isRequired={true}/>
          <Rows inputType="text" labelText="Apellidos" ref="apellidos" isRequired={true}/>
          <Rows inputType="email" labelText="Correo" ref="correo" isRequired={true}/>
          <Rows inputType="password" labelText="Password" ref="password" isRequired={true}/>
          <Rows inputType="password" labelText="Confirmar Password" ref="confirmapassword" isRequired={true}/>
          <button className="Boton">Registro</button>
          <label className="Estado">{this.state.labelLegend}</label>
        </form>
      </div>
    );
  }
}

export default Form;
