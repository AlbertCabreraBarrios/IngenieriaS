import React, { Component } from 'react';
import MuiThemeProvider from  'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

  
    render() {
        const { values,handleChange}=this.props;
        return (
            
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Iniciar sesion"/>
                   <TextField 
                   hintText="Ingresa tus Nombres"
                   floatingLabelText= "Ingresa Nombres"
                   onChange={handleChange('Nombres')}
                   defaultValue={values.Nombres}
                   
                   />
                   <br/>
                   <TextField 
                   hintText="Ingresa tus Apellidos "
                   floatingLabelText= "Ingresa Apellidos"
                   onChange={handleChange('Apellidos')}
                   defaultValue={values.Apellidos}
                   />
                
                   <br/>
                   <TextField
                   hintText="Ingresa tu correo"
                   floatingLabelText= "Ingresa Correo"
                   onChange={handleChange('Correo')}
                   defaultValue={values.Correo}
                   />
                   <br/>
                   <RaisedButton
                   label="Continuar"
                   primary={true}
                   style={Styles.button}
                   onClick={this.continue}
                   
                   />
               </React.Fragment>

            </MuiThemeProvider>
        );
    }
}
const Styles={
    button:{
        margin: 15
    }
};

export default FormUserDetails;