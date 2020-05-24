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
    fontSize: "20px",
    color: "#000000",
    borderBottom: "2px solid #777b7c",
    paddingBottom: "5px",
    fontWeight: "500",
    lineHeight: "1.1",
    textAlign: "left",
    position: "relative",
    paddingTop: "20px",
  },
  inputTitle: {
    margin: "10px 588px 3px 14px",
    fontSize: "20px",
    color: "#777b7c",
    fontWeight: "normal",
    fontSize: "14px",
  },
  formControl: {
    display: "block",
    marginLeft: "13px",
    height: "46px",
    lineHeight: "46px",
    width: "100%",
    color: "#555555",
    backgroundColor: "#ffffff",
    backgroundImage: "none",
    border: "1px solid #cccccc",
    textTransform: "none",
    position: "relative",
    marginTop: "5px",
    borderRadius: "6px",
  },
  gridspacing: {
    paddingTop: "15px",
  },
  radioStyle: {
    cursor: "pointer",
    background: "white",
    borderRadius: "5px",
    /* padding: 10px 0 10px 2px; */
    padding: "7px",
    width: "auto",
    marginRight: "7px",
    cursor: "pointer",
  },
});

const AccountSetup = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        <span>Stepper navs</span>
      </div>
      <div className={classes.stepper_title}>
        <span>Account Setup</span>
      </div>
      <div className={classes.pageWrapper}>
        <div>
          <h2 className={classes.heading}>Enrollment Settings</h2>
        </div>
        {/* <span>Please fill out the enrollment application below</span> */}
        <div className={classes.gridspacing}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>Language</label>
              <select className={classes.formControl}>
                <option className={classes.formControl}>Hindi</option>
                <option className={classes.formControl}>English</option>
              </select>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>Your Enroller's ID</label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>Your Sponsor's ID:</label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <span className={classes.inputTitle}>
              If you do not know your Enroller's or Sponsor’s ID, please contact
              Unicity Customer Service at 1-800-102-2467 account_enqiry
              account_enqiry_link
            </span>
          </Grid>
        </Grid>
        <div>
          <div>
            <h2 className={classes.heading}>About you</h2>
          </div>
        </div>
        <div className={classes.gridspacing}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>First Name</label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>Last Name</label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>
                Birth date: (dd/mm/yyyy)
              </label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridspacing}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>
                Phone(10 digit numbers):
              </label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>Email</label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>PAN: (optional) </label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridspacing}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>Gender (optional)</label>
              <input
                type="radio"
                className={classes.radioStyle}
                style={{ display: "inline" }}
              />
              Male
              <input
                type="radio"
                className={classes.radioStyle}
                style={{ display: "inline" }}
              />
              Male
              <input
                type="radio"
                className={classes.radioStyle}
                style={{ display: "inline" }}
              />
              Male
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>Maritial Status</label>
              <input
                type="radio"
                className={classes.radioStyle}
                style={{ display: "inline" }}
              />
              Male
              <input
                type="radio"
                className={classes.radioStyle}
                style={{ display: "inline" }}
              />
              Male
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>
                {" "}
                I want to receive email communications related to my business{" "}
              </label>
            </Grid>
          </Grid>
        </div>
        <div>
          <h2 className={classes.heading}> Co-Applicant/Nominee </h2>
        </div>
        <div className={classes.gridspacing}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <label className={classes.inputTitle}>Fullname</label>
              <input type="text" className={classes.formControl}></input>

            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>Relationship</label>
              <select className={classes.formControl}>
                <option className={classes.formControl}>Spouse</option>
                <option className={classes.formControl}>Child</option>
                <option className={classes.formControl}>Parent</option>
                <option className={classes.formControl}>Sibling</option>
              </select>
            </Grid>
          </Grid>
        </div>
        <div>
          <h2 className={classes.heading}>Mailing Address</h2>
        </div>
        <div className={classes.gridspacing}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>Address 1</label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>Address 2</label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>City</label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
          </Grid>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>State</label>
              <select className={classes.formControl}>
                <option className={classes.formControl}>Karnataka</option>
                <option className={classes.formControl}>Tamilnadu</option>
              </select>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>Postal Code</label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
          </Grid>
        </div>
        <div>
          <div>
            <h2 className={classes.heading}>
              {" "}
              Direct Deposit for Commissions{" "}
            </h2>
          </div>
        </div>
        <div className={classes.gridspacing}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label className={classes.inputTitle}> Account Number </label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>
                {" "}
                Account Title(account name as per bank records){" "}
              </label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}> Bank Name </label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
          </Grid>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label className={classes.inputTitle}> Branch Name </label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}> IFSC </label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>
                {" "}
                Swift Code(optional){" "}
              </label>
              <input type="text" className={classes.formControl}></input>
            </Grid>
          </Grid>
        </div>
        <div>
          <div>
            <h2 className={classes.heading}> Password </h2>
          </div>
        </div>
        <div className={classes.gridspacing}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>
                {" "}
                Create your password:{" "}
              </label>
              <input type="password" className={classes.formControl}></input>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>
                Retype your password:
              </label>
              <input type="password" className={classes.formControl}></input>
            </Grid>
          </Grid>
        </div>
        
        <div style={{ marginTop: "30px" }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label className={classes.inputTitle}> Password status bar </label>
             
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}> Show Password </label>
              <input type="checkbox" className={classes.formControl}></input>
            </Grid>
            
          </Grid>
        </div>
        
      </div>
      <Link to="/">
        <button>GoBack</button>
      </Link>
      <Link to ="/summary">
        <button>Continue</button>                            
      </Link>
    </Fragment>
  );
};

export default AccountSetup;
