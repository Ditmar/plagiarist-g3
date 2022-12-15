import React from 'react';
import {BootstrapButton, useStyles} from './menu.styles'
import Logo from './iconos/logo.png';


function LogoComponent() {
    const classes= useStyles()
    return (
        <BootstrapButton className={classes.container}>
        <img src={Logo} width="40px"></img>
        <span className={classes.title}>Plagio Control</span>
    </BootstrapButton>
    );
}

export default LogoComponent;
