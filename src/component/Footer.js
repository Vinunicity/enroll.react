import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  buttonReset: {
    padding: "1px 5px",
    fontSize: "12px",
    lineHeight: "1.5",
    borderRadius: "3px",
    color: "#333",
    backgroundColor: "#fff",
    borderColor: "#ccc",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "middle",
    cursor: "pointer",
    backgroundImage: "none",
    border: "1px solid transparent",
    whiteSpace: "no-wrap",
  },
  buttonContinue: {
    marginRight: "20px",
    float: "right",
    padding: "5px 10px",
    fontSize: "12px",
    lineHeight: "1.5",
    borderRadius: "3px",
    color: "#fff",
    backgroundColor: "#37a9df",
    borderColor: "#239fda",
    display: "relative",
    textAlign: "center",
    verticalAlign: "middle",
    cursor: "pointer",
    backgroundImage: "none",
    border: "1px solid transparent",
    userSelect: "none",
    display: "relative",
    marginTop:"1px"
  },
  footerText: {
    marginLeft: "14px",
    textAlign: "left",
    fontSize: "14px",
    lineHeight: "1.42",
    color: "#333",
    marginTop:"5px"
  },
  // footerDiv:{
  //   margin:"0px",
  //   padding:"0px"
  // }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.footerDiv}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-end"
        >
          <Grid item md={8} xs={10}>
            <p className={classes.footerText}>
              Need Help? footer_fax_number Executive Support
              800-UNICITY(8642489) M-F, 8 a.m. - 6 p.m. MDT
              customerservice@unicity.com © 2020 Copyright Unicity
              International, Inc. All Rights Reserved.{" "}
              <button className={classes.buttonReset}>Reset</button>
            </p>
          </Grid>

          <Grid item md={4} xs ={2}>
{/* //TODO Arrow symbol for continue */}
            <div>
              <button className={classes.buttonContinue}>Continue</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Footer;
