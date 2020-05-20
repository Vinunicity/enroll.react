import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { Grid } from "@material-ui/core";

const useStyles = createUseStyles({
  //   enrl_setting_title: {
  //     textAlign: "left",
  //   },
  //   small:{
  //     fontWeight: 400,
  //     fontSize: "65%",
  // lineHeight: 1,
  // color: "#7d7d7d",
  // },
  // formLabel: {
  //     color:"777b7c",
  //     fontWeight:400,
  //     fontSize: "14px",
  //     lineHeight: 1.42857143
  // },
  // inputStyles:{
  //     width:"100%",
  //     height:"46px",
  //     padding: "10px 16px",
  //     fontSize:"18px",
  //     lineHeight:1.33,
  //     borderRadius:"6px",
  // }
});

const AccountSetup = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <h1 className={classes.enrl_setting_title}>Account Setup</h1>
        <h2 className={classes.enrl_setting_title}>Enrolment Settings</h2><hr></hr>
        <p> Please fill out the enrollment application below </p>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <label>
              <span>Language</span>
            </label>
            <br></br>
            <br></br>
            <select id="langauge">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
            </select>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span>Your Enrollers's ID:</span>
            </label>
            <br></br>
            <span>(Person who introduced you to Unicity)</span>
            <br></br>
            <input type="text" className={classes.inputStyles}></input>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span>Your Sponsor's ID:</span>
            </label>
            <br></br>
            <span>(Person who is your direct upline)</span>
            <br></br>
            <input type="text"></input>
          </Grid>
          <div>
            <p>
              If you do not know your Enroller's or Sponsor’s ID, please contact
              Unicity Customer Service at 1-800-102-2467 or click here to{" "}
              <a href="">enquiry</a>
            </p>
          </div>
        </Grid>
      </div>
      <div>
        <h2 className={classes.enrl_setting_title}>
          <span>
            About You{" "}
            <small className={classes.small}>
              (For all future correspondence please make sure the Email ID and
              Contact number is valid. Your login credentials will be sent to
              the specified E-mail ID)
            </small>
          </span>
        </h2>
        <hr></hr>
      </div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <label>
              <span className={classes.formLabel}>First Name</span>
            </label>
            <br></br>
            <br></br>
            <input type="text" className={classes.inputStyles}></input>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span className={classes.formLabel}>Last Name</span>
            </label>
            <br></br>
            <br></br>
            <input type="text" className={classes.inputStyles}></input>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span className={classes.formLabel}>
                Birth date : (dd/mm/yyyy)
              </span>
            </label>
            <br></br>
            <br></br>
            <input type="text" className={classes.inputStyles}></input>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <label>
              <span className={classes.formLabel}>
                Phone( 10 digit numbers):
              </span>
            </label>
            <br></br>
            <br></br>
            <input type="text" className={classes.inputStyles}></input>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span className={classes.formLabel}>Email</span>
            </label>
            <br></br>
            <br></br>
            <input type="text" className={classes.inputStyles}></input>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span className={classes.formLabel}>PAN: (optional)</span>
            </label>
            <br></br>
            <br></br>
            <input type="text" className={classes.inputStyles}></input>
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <label>
              <span className={classes.formLabel}>Gender (Optional):</span>
            </label>
            <br></br>
            <br></br>
            <input id="gender" type="radio"></input>
            <span>Male</span>
            <input id="gender" type="radio"></input>
            <span>Female</span>
            <input id="gender" type="radio"></input>
            <span>Transgender</span>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span className={classes.formLabel}>
                {" "}
                Marital Status: (optional){" "}
              </span>
            </label>
            <br></br>
            <br></br>
            <input id="gender" type="radio"></input>
            <span>Single</span>
            <input id="gender" type="radio"></input>
            <span>Married</span>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span>
                I want to receive email communications related to my business.{" "}
              </span>
              <input type="checkbox" id="email_optin"></input>
            </label>
          </Grid>
        </Grid>
      </div>
      <div>
        <h2 className={classes.enrl_setting_title}> Co-Applicant/Nominee </h2><hr></hr>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <label>
              <span> Full Name </span>
            </label>
            <br></br>
            <br></br>
            <input type="text"></input>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span className={classes.formLabel}> Relationship</span>
            </label>
            <br></br>
            <br></br>
            <select name="relationship">
              <option value=""></option>
              <option value="Spouse">Spouse</option>
              <option value="Child">Child</option>
              <option value="Parent">Parent</option>
              <option value="Sibling">Sibling</option>
            </select>
          </Grid>
        </Grid>
      </div>
      <div>
        <h2 className={classes.enrl_setting_title}>Mailing Address</h2><hr></hr>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <label>
              <span> Address 1 </span>
            </label>
            <br></br>
            <br></br>
            <input
              type="text"
              placeholder="Street Address, P.O. Box, etc."
            ></input>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span> Address 2 (optional) </span>
            </label>
            <br></br>
            <br></br>
            <input
              type="text"
              placeholder="Apt #, Suite,Unit, Bldg, Floor,etc."
            ></input>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span> City </span>
            </label>
            <br></br>
            <br></br>
            <input type="text"></input>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <label>
              <span>State</span>
            </label>
            <br></br>
            <br></br>
            <select id="state">
              <option value="Karnataka">Karnataka</option>
              <option value="Tamilnadu">TamilNadu</option>
            </select>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span>Postal Code</span>
            </label>
            <br></br>
            <br></br>
            <input type="text"></input>
          </Grid>
        </Grid>
      </div>
      <div>
        <h2 className={classes.enrl_setting_title}>
          {" "}
          Direct Deposit for Commissions{" "}
        </h2><hr></hr>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <label>
              <span>Account number</span>
            </label>
            <br></br>
            <br></br>
            <input type="text"></input>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span> Account Title(account name as per bank records) </span>
            </label>
            <br></br>
            <br></br>
            <input type="text"></input>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span> Bank Name </span>
            </label>
            <br></br>
            <br></br>
            <input type="text"></input>
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <label>
              <span> Branch Name </span>
              <br></br>
              <br></br>
              <input type="text"></input>
            </label>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span> IFSC </span>
              <br></br>
              <br></br>
              <input type="text"></input>
            </label>
          </Grid>
          <Grid item xs={4}>
            <label>
              <span> Swift Code(optional) </span>
              <br></br>
              <br></br>
              <input type="text"></input>
            </label>
          </Grid>
        </Grid>
      </div>

      <div>
      <h2 className={classes.enrl_setting_title}>
          {" "}
          Password{" "}
        </h2><hr></hr>
        <p> Please choose a password for your Unicity Office account. </p>
          <Grid container spacing = {3}>
                <Grid item xs = {4}>
                    <label><span> Create your password: </span></label><br></br>
                    <span>(6+ characters, no spaces) </span><br></br>
                    <input type = "password"></input>
                </Grid>
                <Grid item xs = {4}>
                    <label><span> Repeat your password: </span></label><br></br>
                    <br></br>
                    <input type = "password"></input>
                </Grid>
          </Grid>
      </div>
      <div>
          <Grid container spacing = {3}>
                <Grid item xs = {4}> 
                    <p>Password strength bar</p>
                </Grid>
                <Grid item xs = {4}>
                    
                    <input type = "checkbox"></input>
                    <span>Show Password</span>
                </Grid>
          </Grid>
      </div>

      <Link to="/">
        <button>GoBack</button>
      </Link>
      <Link to="/summary">
        <button>Continue</button>
      </Link>
    </div>
  );
};
export default AccountSetup;
