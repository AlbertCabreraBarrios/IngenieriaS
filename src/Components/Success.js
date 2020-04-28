import React, { Component } from 'react';
import MuiThemeProvider from  'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';



export class Success extends Component {
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
       
        return (
            
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Proceso Terminado"/>
                   <h1> Gracias por Ingresar</h1>
                   <p>++++++++++++++++++++++++ </p>

                  
               </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default Success;