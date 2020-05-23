import React from 'react';
import {createUseStyles} from 'react-jss';
const useStyles = createUseStyles({
    body:{
        background:"#eeeff0",
        backgroundPositionX:"0%",
        backgroundPositionY:"0%",
        backgroundRepeat:"repeat",
        backgroundAttachment:"scroll",
        backgroundImage:"none",
        backgroundSize:"auto",
        backgroundOrigin:"padding",
        marginLeft:"-15px",
        marginRight:"-15px",
    },
    stepperTitle:{
        margin:"px",
        padding:"0px",
        fontSize:"15px",
        fontWeight:"bold",
        textTransform:"uppercase"

    }
})
const AccountSetup = () =>{
    const classes = useStyles();
    return <div>
        <div>Stepper Bars</div><br></br><br></br>
        <div><span className ={classes.stepperTitle}>account setup</span></div>
        <div className = {classes.body} >

        </div>
    </div>
}

export default AccountSetup;