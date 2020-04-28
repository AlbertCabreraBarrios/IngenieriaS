import React, { Component } from 'react';
import MuiThemeProvider from  'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();

        //formulario de procesos 
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values: { Nombres, Apellidos, Correo, Ocupacion, Ciudad, Departamento}}=this.props;

        return (
            
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Confirmar Usuario"/>
                  <List>
                  <ListItem
                  primaryText="Nombres"
                  secondaryText={Nombres}
                  />
                  <ListItem
                  primaryText="Apellidos"
                  secondaryText={Apellidos}
                  />
                  <ListItem
                  primaryText="Correo"
                  secondaryText={Correo}
                  />
                     <ListItem
                  primaryText="Ocupacion"
                  secondaryText={Ocupacion}
                  />
                     <ListItem
                  primaryText="Ciudad"
                  secondaryText={Ciudad}
                  />
                     <ListItem
                  primaryText="Departamento"
                  secondaryText={Departamento}
                  />

                  </List>
                  <br/>
                   <RaisedButton
                   label="Confirmar y Continuar"
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

export default FormUserDetails;