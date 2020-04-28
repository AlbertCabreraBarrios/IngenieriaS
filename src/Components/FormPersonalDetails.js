import React, { Component } from 'react';
import MuiThemeProvider from  'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {  
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values,handleChange}=this.props;
        return (
            
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Ingresa datos personales "/>
                   <TextField
                    hintText="Ingresa Ocupacion "
                   floatingLabelText= "Ocupacion"
                   onChange={handleChange('Ocupacion')}
                   defaultValue={values.Ocupacion}
                   
                   />
                   <br/>
                   <TextField hintText="Ingresa tu ciudad "
                   floatingLabelText= "ciudad"
                   onChange={handleChange('Ciudad')}
                   defaultValue={values.Ciudad}
                   />
                   
                   
                   <br/>
                   <TextField 
                   hintText="Ingresa tu Departamento"
                   floatingLabelText= "Departamento"
                   onChange={handleChange('Departamento')}
                   defaultValue={values.Departamento}
                   />
                    <br/>
                   <RaisedButton
                   label="Continuar"
                   primary={true}
                   style={Styles.button}
                   onClick={this.continue}
                   
                   />
                    
                       <RaisedButton
                   label="Regesar"
                   primary={false}
                   style={Styles.button}
                   onClick={this.back}
                   
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

export default FormPersonalDetails;