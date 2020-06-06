import React, { Fragment } from 'react';
import { createUseStyles } from 'react-jss';
import startImage from './common/img/start-bg.png';
import uniEnrollLogo from './common/img/unicity-enroll.png';
import selectImage from './common/img/white_bg_60.png';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import StepperBar from './StepperBar';
import Footer from './Footer';
const useStyles = createUseStyles({
  logo: {
    margin: "18px",
    padding: "2px",
    display: "block",
    float: "left",
  },
  stepperBar: {
    display: "block",
    overflowX: "hidden",
    width: "100%",
    marginTop: "2px",
  },
  stepperTitle: {
    margin: "5px 0px 0px 18px",
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

        <div>
         <Footer></Footer>
        </div>
        <div>
          <Link to="/account_setup">
            <button>Continue</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Start;
