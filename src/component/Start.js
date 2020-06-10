import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
import startImage from "./common/img/start-bg.png";
import uniEnrollLogo from "./common/img/unicity-enroll.png";
import selectImage from "./common/img/white_bg_60.png";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import StepperBar from "./StepperBar";
import Footer from "./Footer";
const useStyles = createUseStyles({
  logo: {
    marginLeft: "14px",
    padding: "2px",
    display: "block",
    float: "left",
    marginBottom:"3px",
    marginTop:"18px"
  },
  stepperBar: {
    display: "block",
    overflowX: "hidden",
    width: "100%",
    marginTop: "2px",
  },
  stepperTitle: {
    margin: "5px 0px 14px 18px",
    padding: "0px",
    display: "block",
    float: "left",
    fontSize: "15px",
    fontWeight: "700",
    textTransform: "uppercase",
    boxSizing: "border-box",
    color: "#333",
  },
  pageIndicator: {
    textAlign: "right",
    paddingRight: "18px",
    color: "#333",
  },
  currentPageIndicator: {
    // textAlign:"right",
    // paddingRight:"18px",
    color: "#333",
    fontWeight: "20px",
  },
  startWrapper: {
    backgroundImage: `url(${startImage})`,
    backgroundSize: "cover",
    width: "100%",
    height: "50%",
    postition: "fixed",
    backgroundRepeat: "no-repeat",
    paddingTop: "70px",
    paddingBottom: "40px",
    overflowX: "hidden",
    marginTop: "4px",
    overflowX: "hidden",
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
    overflowX: "hidden",
  },
  selectTitle: {
    fontSize: "14px",
    color: "#333333",
    marginBottom: "5px",
    fontWeight: "Bold",
    overflowX: "hidden",
  },
  optionWrapper: {
    width: "95%",
    display: "inline-block",
    color: "#555555",
    backgroundColor: "#ffffff",
    backgroundImage: "none",
    border: "1px solid #cccccc",
    height: "46px",
    fontSize: "18px",
    overflowX: "hidden",
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
    textAlign:"left"
  },
  radioDisType: {
    verticalAlign: "top",
    marginTop: "10px",
    marginRight: "5px",
    color: "inherit",
  },
});

const Start = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        {/* <div className={classes.logo}>
          <a href="http://localhost:3000/">
            <img src={uniEnrollLogo} alt="Unicity Enroll"></img>
          </a>
        </div>
        <div className={classes.stepperBar}>
            <StepperBar></StepperBar>
        </div>
      </div> */}
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item md={12}>
            <div className={classes.logo}>
              <a href="http://localhost:3000/">
                <img src={uniEnrollLogo} alt="Unicity Enroll"></img>
              </a>
            </div>
          </Grid>
        </Grid>
        <div className={classes.stepperBar}>
          <StepperBar></StepperBar>
        </div>
        <div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item md={10}>
              <span className={classes.stepperTitle}> SELECT YOUR MARKET</span>
            </Grid>
            {/* //TODO Current page indicator has to be Bold */}
            <Grid item md={2} className={classes.pageIndicator}>
              <span
                className={classes.currentPageIndicator}
                style={{ fontWeight: "20px" }}
              >
                1<span>/3</span>
              </span>
            </Grid>
          </Grid>
        </div>

        {/* <div className={classes.startWrapper}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
            
          >
            <div className={classes.selectWrapper}>
              <label>Select Your Market</label>
              <Grid item >
                <div style={{ marginTop: "2px" }}>
                  <select className={classes.optionWrapper}>
                    <option value="India" className={classes.optionWrapper}>
                      {" "}
                      India
                    </option>
                    <option value="India" className={classes.optionWrapper}>
                      {" "}
                      USA
                    </option>
                  </select>
                </div>
              </Grid>
             
              </div>
          </Grid>
        </div>  */}

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
                DISTRIBUTOR 
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
                        opportunity to earn commissions and bonuses on referral
                        customer purchases as you help others Make Life Better.
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

        {/* <Grid item >
           <div  style ={{marginTop:"2px",display:"relative",float:"left"}}>
              <select className ={classes.optionWrapper}>
                <option value ="India" className ={classes.optionWrapper}> India</option>
                <option value ="India" className ={classes.optionWrapper}> USA</option>

               
              </select>
            </div>
           </Grid> */}

        <div >
          <Footer></Footer>
        </div>
        {/* <div>
          <Link to="/account_setup">
            <button>Continue</button>
          </Link>
        </div> */}
      </div>
    </Fragment>
  );
};

export default Start;
