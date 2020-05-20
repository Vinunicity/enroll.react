import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Grid} from '@material-ui/core';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    centerAlign:{
        margin: "auto",
        width: "50%"
    },
    dis_bg:{
        background:"#f29549",
        position:'relative',
        padding:"10px 20px",
        height:"230px",
        color:"#fff",
        padding: "10px",
        textAlign:'center',
    }
})
const Starttpl = () => {
    const classes =  useStyles()
  return (
    <div>
        <div>
            <h1>Start</h1>
        </div>
        <div>
            <Grid container spacing = {2}>
                <Grid className = {classes.centerAlign} item xs = {6}>
                    <label><span>Select Your Market</span></label>
                    <select>
                        <option value ="India">India</option>
                        <option value ="United States">United States</option>
                    </select>
                </Grid>
                <Grid className = {classes.centerAlign} item xs = {6}>
                    <label><span> Select Your Language </span></label>
                    <select>
                        <option value ="English">English</option>
                        <option value ="Hindi">Hindi</option>
                    </select>
                </Grid>
                
                <div className = {classes.centerAlign}>
                <Grid container spacing = {2}>
                    <Grid item xs = {6} className = {classes.dis_bg}>
                        <div>
                            <span>DISTRIBUTOR (Free Sign-Up)</span>
                        </div>
                        <div>
                            <input type = "radio"></input>
                            <span>By starting a Unicity business, you’ll have the opportunity to earn commissions and bonuses on referral customer purchases as you help others Make Life Better.</span>
                        </div>
                    </Grid>
                </Grid>
                </div>

            </Grid>
        </div>
        <br></br>
      <Link to="/account_setup">
        <button>Continue</button>
      </Link>
    </div>
  );
};

export default Starttpl;
