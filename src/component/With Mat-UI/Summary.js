import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  stepper_title: {
    margin: "15px",
    padding: "0px",
    fontSize: "15px",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "left",
  },
  pageWrapper: {
    background: "#eeeff0",
    backgroundPositionX: "0%",
    backgroundPositionY: "0%",
    backgroundAttachment: "scroll",
    backgroundRepeat: "repeat",
    backgroundImage: "none",
    backgroundSize: "auto",
    backgroundOrigin: "padding-box",
    backgroundClip: "border-box",
  },
  heading: {
    margin: "10px 305px 3px 14px",
    fontSize: "21px",
    color: "#666",

    paddingBottom: "5px",
    fontWeight: "bold",
    lineHeight: "1.1",
    textAlign: "left",
    position: "relative",
    paddingTop: "20px",
  },
  gridSpacing: {
    marginLeft: "12px",
    marginTop: "-12px",
  },
  sectionTitle: {
    color: "#ffffff",
    backgroundColor: "#777b7c",
    backgroundPositionX: "0%",
    backgroundPositionY: "0%",
    backgroundRepeat: "repeat",
    backgroundAttachment: "scroll",
    backgroundImage: " none",
    backgroundSize: "auto",
    backgroundOrigin: "padding-box",
    backgroundClip: " border-box",
    textAlign: "left",
    padding: "7.5px 15px",
    fontSize: "16.8px",
    fontWeight: "500",
  },
  sectionBody: {
    backgroundColor: "#FFFFFF",
  },
});

const Summary = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div>
        <span>Stepper navs</span>
      </div>
      <div className={classes.stepper_title}>
        <span>Complete</span>
      </div>
      <div className={classes.pageWrapper}>
        <div className={classes.heading}>Enrollment Summary</div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionBody}>
                <Grid container xs={6}>
                  <Grid
                    item
                    xs={5}
                    style={{ textAlign: "left", paddingLeft: "15px" }}
                  >
                    <span>Country</span>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    style={{ textAlign: "left", paddingLeft: "15px" }}
                  >
                    India
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div>
                <div className={classes.sectionBody}></div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>Enrollment Settings</div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridSpacing}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className={classes.sectionTitle}>
                The Distributor Agreement - Terms & Conditions
              </div>
            </Grid>
          </Grid>
        </div>
        <div
          className={classes.gridSpacing}
          style={{
            textAlign: "left",
            margintLeft: "2px",
            paddingLeft: "16px",
            paddingTop: "10px",
            backgroundColor: "white",
          }}
        >
          <span>Please review the terms and conditions below.</span>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <div>
                <textarea rows="10" style={{ width: "100%" }}></textarea>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Link to="/account_setup">
        <button>Back</button>
      </Link>
    </Fragment>
  );
};

export default Summary;
