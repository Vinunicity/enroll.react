import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
import StepperBar from "./StepperBar";
import { Grid } from "@material-ui/core";

const useStyles = createUseStyles({
  mainBody: {
    overFlowX: "hidden",
  },
  pageBody: {
    background: "#eeeff0",
    marginRight: "-15px",
    marginLeft: "-15px",
    padding: "15px",
    fontSize: "14px",
    color: "#333333",
  },
  stepper_title: {
    margin: "20px",
    padding: "0px",
    fontSize: "15px",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: "0px",
    marginBottom: "10px",
    fontWeight: "21px",
    fontWeight: "bold",
    color: "#666",
    textAlign: "left",
  },
  sectionHead: {
    color: "#ffffff",
    background: "#777b7c",
    backgroundPositionX: "initial",
    backgroundPositionY: "initial",
    backgroundSize: "initial",
    backgroundRepeatX: "initial",
    backgroundRepeatY: "initial",
    backgroundAttachment: "initial",
    backgroundClip: "initial",
    backgroundImage: "initial",
    padding: "7.5px 15px",
    fontSize: "16.8px",
    textAlign: "left",
    marginTop: "1px",
  },
  summDataHead: {
    color: "#333333",
    fontSize: "14px",
    textAlign: "left",
    padding: "15px",
    borderBottom: "1px solid #cfd0d1",
    background: "#ffffff",
  },
});

const Summary = () => {
  const classes = useStyles();
  return (
    <Fragment>
      {/* <div className ={classes.mainBody}>
      <div>
      <h2>
        <span>Stepper navs</span>
      </div>
      <div className ={classes.pageBody}>
         sad;'alsd'  
      </div>
      
      </div>
      </div> */}

      <div>
        <StepperBar></StepperBar>
      </div>
      <div className={classes.mainBody}>
        <div className={classes.pageBody}>
          <h2>
            <span>Enrollment Summary</span>
          </h2>
          <div className={classes.sectionHead} style={{ margin: "0px" }}>
            <Grid container>
              <Grid md={9}>
                <h2>Enrollment Settings</h2>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingLeft: "15px" }}>
            <Grid container>
              <Grid item md={2}>
                <div className={classes.summDataHead} style={{ width: "100%" }}>
                  <span>Country</span>
                </div>
              </Grid>
              <Grid item md={2}>
                <div className={classes.summDataHead} style={{ width: "100%" }}>
                  <span>India</span>
                </div>
              </Grid>

              <Grid item md={2}>
                <div
                  className={classes.summDataHead}
                  style={{ width: "100%", borderLeft: "1px solid #cfd0d1" }}
                >
                  <span>Language</span>
                </div>
              </Grid>
              <Grid item md={2}>
                <div className={classes.summDataHead} style={{ width: "100%" }}>
                  <span>English</span>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={2}>
                <div className={classes.summDataHead} style={{ width: "100%" }}>
                  <span>Enroller ID</span>
                </div>
              </Grid>
              <Grid item md={2}>
                <div className={classes.summDataHead} style={{ width: "100%" }}>
                  <span>2</span>
                </div>
              </Grid>

              <Grid item md={2}>
                <div
                  className={classes.summDataHead}
                  style={{ width: "100%", borderLeft: "1px solid #cfd0d1" }}
                >
                  <span>Sponsor ID</span>
                </div>
              </Grid>
              <Grid item md={2}>
                <div className={classes.summDataHead} style={{ width: "100%" }}>
                  <span>2</span>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Summary;
