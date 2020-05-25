import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import startImage from "../common/img/start-bg.png";
import selectImage from "../common/img/white_bg_60.png";
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
  },
  centerGrid: {
    margin: "auto",
    width: "50%",
    padding: "20px",

    justifyContent: "center",
  },
  selectWrapper: {
    padding: "20px 15px 30px 20px",
    backgroundImage: `url(${selectImage})`,
    backgroundRepeat: "repeat",
    backgroundPositionX: "0%",
    backgroundPositionY: "0%",
    backgroundAttachment: "scroll",
    backgroundSize: "auto",
    backgroundPadding: "padding-box",
    backgroundClip: "border-box",
    width: "50%",
    float: "left",
    position: "relative",
    fontSize: "14px",
    color: "#333333",
    fontWeight: "bold",
    marginLeft: "20px",
    textAlign: "left",
  },
  clearfix: {
    overflow: "auto",
  },
  selectTitle: {
    fontSize: "14px",
    color: "#333333",
    marginBottom: "5px",
    fontWeight: "Bold",
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
  disWrapper: {
    backgroundColor: "#f29549",
    backgroundPositionX: "0%",
    backgroundPositionY: "0%",
    backgroundImage: "none",
    backgroundSize: "auto",
    backGroundOrigin: "padding-box",
    backgroundClip: "border-box",
    backgroundRepeat: "repeat",
    backgroundAttachment: "scroll",
    color: "#ffffff",
    height: "180px",
    minWidth: "250px",
    marginLeft: "2px",
    width: "45%",
    paddingLeft: "2px",
    marginTop: "20px",
    marginLeft: "15px",
  },
  disContent: {
    position: "relative",
    paddingTop: "15px",
    paddingLeft: "10px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  radioDisType: {
    verticalAlign: "top",
    marginTop: "10px",
    marginRight: "5px",
    color: "inherit",
  },
});

const Start = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        <span>Stepper navs</span>
      </div>
      <div className={classes.stepper_title}>
        <span>Start</span>
      </div>

      <Grid container className={classes.startWrapper} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center">
            {/* <label className ={classes.selectWrapper}>Select Your Market</label>
                            <select className ={classes.selectWrapper}>
                            <option value = "English">English</option>
                            <option value = "English">Hindi</option
                            </select> */}
            {/* <span className={classes.selectWrapper}>Select Your Market</span> */}
            <table className={classes.selectWrapper}>
              <thead>
                <tr>
                  <td>Select Your Market</td>
                  <td>Select Your Language</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select className={classes.optionWrapper}>
                      <option className={classes.optionWrapper}>India</option>
                    </select>
                  </td>

                  <td>
                    <select className={classes.optionWrapper}>
                      <option>Hindi</option>
                      <option>English</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item xs={6}>
            <div className={classes.disWrapper}>
              <span className={classes.disContent}>
                DISTRIBUTOR (Free Sign-Up)
              </span>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <input
                          type="radio"
                          className={classes.radioDisType}
                        ></input>
                      </div>
                      <div>
                        <p>
                          By starting a Unicity business, you’ll have the
                          opportunity to earn commissions and bonuses on
                          referral customer purchases as you help others Make
                          Life Better.
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Link to="/account_setup">
        <button>Continue</button>
      </Link>
    </Fragment>
  );
};
export default Start;
