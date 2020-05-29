import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { createUseStyles } from "react-jss";
import startImage from "./images/img/start-bg.png";
import selectImage from "./images/img/white_bg_60.png";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = createUseStyles({
  stepper_title: {
    margin: "15px",
    padding: "0px",
    fontSize: "15px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  startWrapper: {
    backgroundImage: `url(${startImage})`,

    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    postition: "fixed",
    backgroundRepeat: "no-repeat",
    paddingTop: "70px",
    paddingBottom: "40px",
    display: "flex",
    overflowX: "hidden",
    overflowY: "hidden",
    justifyContent: "center",
  },
  selectWrapper: {
    marginTop: "75px",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  optionWrapper: {
    width: "98%",
    display: "block",
    color: "#555555",
    backgroundColor: "#ffffff",
    backgroundImage: "none",
    border: "1px solid #cccccc",
    height: "46px",
    fontSize: "18px",
  },
  selectContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    backgroundImage: `url(${selectImage})`,
    padding: "30px",
  },
  optionWrapper: {
    display: "flex",
    backgroundColor: "#ffffff",
    border: "1px solid #cccccc",
    fontSize: "18px",
    height: "46px",
  },
});
const Start = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        <span>Stepper navs</span>
      </div>
      <div className={classes.stepper_title}>
        <span>Start</span>
      </div>
      <div className={classes.startWrapper}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Select Your Market</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem>india</MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
          </Select>
        </FormControl>
      </div>
    </Fragment>
  );
};

export default Start;
