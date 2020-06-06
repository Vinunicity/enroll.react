import React from "react";
import { Grid } from "@material-ui/core";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  stepper_select: {
    display: "inline-block",
    background: "#37a9df",
    borderRadius: "5px",
    height: "10px",
    marginRight: "1.666667%",
    width: "93%",
    marginLeft: "10px",
    marginTop:"2px"
  },
  steppers: {
    display: "inline-block",
    background: "#cfd0d1",
    borderRadius: "5px",
    height: "10px",
    marginRight: "1.666667%",
    width: "93%",
    marginLeft: "10px",
    marginTop:"2px"
  },
  
});

const StepperBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.scrollBar}>
      <Grid
        container
        className={classes.scrollBar}
        style={{ padding: "0", margin: "0" }}
      >
        <Grid item md={4} className={classes.scrollBar}>
          <div>
            <a className={classes.stepper_select}></a>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <a className={classes.steppers}></a>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <a className={classes.steppers} style={{ marginLeft: "10px" }}></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepperBar;
