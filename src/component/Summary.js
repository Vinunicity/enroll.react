import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  tab_head: {
    background: "#777b7c",
    color: "#fff",
    margin: 0,
    padding: "7.5px 15px",
    fontSize: "16.8px",
    textAlign: "left",
    fontWeight: 500,
    lineHeight: 1.1,
  },
  tab_data: {
    width: "50%",
    padding: "7.5px 0",
    borderBottom: "1px dotted #cfd0d1",
  },
  sign_inp: {
    height: "46px",
    borderRadius: "6px",
    dipsply: "block",
    width: "100%",
    fontSize: "18px",
    color: "#cfcfcf",
    opacity: 1,
  },
  disclaimer: {
    fontSize: "11.2px",
    fontWeight: "400",
    color: "#333",
  },
  page_body:{
      background:"#eeeff0",
  }
});

const Summary = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <h1>Complete</h1>
        <div >        
        <h2>Enrollment Summary </h2>
        <h2 className={classes.tab_head}>Enrollment Settings</h2>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div>
              <table>
                <tr>
                  <td>Country</td>
                  <td>India</td>
                </tr>
                <tr>
                  <td>Enroller Id</td>
                  <td>2</td>
                </tr>
              </table>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <table>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td>Language</td>
                  <td>English</td>
                </tr>
                <tr>
                  <td>Sponsor Id</td>
                  <td>2</td>
                </tr>
              </table>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <h2 className={classes.tab_head}>Co-Applicant/Nominee</h2>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <table>
              <tr>
                <td>Fullname</td>
                <td>Vinoth</td>
              </tr>
            </table>
          </Grid>
          <Grid item xs={6}>
            <table>
              <tr>
                <td>Relationship</td>
                <td>Single</td>
              </tr>
            </table>
          </Grid>
        </Grid>
      </div>
      <div>
        <h2 className={classes.tab_head}>
          About You
          <span style={{ fontSize: "65%" }}>
            {" "}
            (For all future correspondence please make sure the Email ID and
            Contact number is valid. Your login credentials will be sent to the
            specified E-mail ID)
          </span>
        </h2>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <table>
              <tr>
                <td>First Name</td>
                <td>Vin</td>
              </tr>
              <tr>
                <td>Birth Date</td>
                <td>06/11/1994</td>
              </tr>
              <tr>
                <td>Maritial Status</td>
                <td>Single</td>
              </tr>
              <tr>
                <td>Phone(10 digit numbers)</td>
                <td> 8943132132</td>
              </tr>
            </table>
          </Grid>
          <Grid item xs={6}>
            <table>
              <tr>
                <td>Last Name</td>
                <td>Kum</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>PAN: (Optional)</td>
                <td>--</td>
              </tr>
              <tr>
                <td>Email</td>
                <td> vin@gmail.com</td>
              </tr>
            </table>
          </Grid>
        </Grid>
      </div>
      <div>
        <h2 className={classes.tab_head}>Mailing Address</h2>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <table>
                <tr>
                  <td>Address 1</td>
                  <td>Marathalli</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>Bengaluru</td>
                </tr>
                <tr>
                  <td>Zip Code</td>
                  <td>560037</td>
                </tr>
              </table>
            </Grid>
            <Grid item xs={6}>
              <table>
                <tr>
                  <td>Address 2</td>
                  <td>Varthur road</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>Karnataka</td>
                </tr>
              </table>
            </Grid>
          </Grid>
        </div>
        <div>
          <h2 className={classes.tab_head}>Direct Deposit for Commissions</h2>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <table>
                <tr>
                  <td>Account Number</td>
                  <td> 79843132132198</td>
                </tr>
                <tr>
                  <td> Bank Name </td>
                  <td>Axis</td>
                </tr>
                <tr>
                  <td>IFSC</td>
                  <td>PYTM0123456</td>
                </tr>
              </table>
            </Grid>
            <Grid item xs={6}>
              <table>
                <tr>
                  <td>Account Title</td>
                  <td> Vinoth</td>
                </tr>
                <tr>
                  <td> Branch Name </td>
                  <td>Whitefield</td>
                </tr>
                <tr>
                  <td>Swift Code</td>
                  <td>PYTM0123456</td>
                </tr>
              </table>
            </Grid>
          </Grid>
        </div>
      </div>
      <div>
        <h2 className={classes.tab_head}>
          The Distributor Agreement - Terms & Conditions
        </h2>
        <p style={{ textAlign: "left" }}>
          Please review the terms and conditions below.
        </p>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div style={{ padding: "10px" }}>
              <textarea rows="10" style={{ width: "100%" }}></textarea>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div>
              <p style={{ textAlign: "left" }}>Electronic Structure</p>
              <input
                type="text"
                placeholder="please type your full name"
                className={classes.sign_inp}
              ></input>
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{ textAlign: "left" }}>
        <small>
          {" "}
          By signing and submitting this application, you are agreeing to the
          Terms and Conditions stated above.{" "}
        </small>
      </div>
      <br></br>
      <br></br>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div style={{ textAlign: "left" }}>
              <input type="checkbox"></input>
              <p className={classes.disclaimer}>
                By checking this box and submitting this form, I indicate my
                intent to register as a Unicity Distributor, and certify that I
                have read and agreed to the current Unicity Policies and
                Procedures and Terms and Conditions linked above
              </p>
              <p className={classes.disclaimer}>
                I have also read and agreed to the Unicity Compensation Plan,
                all of which are incorporated herein and made part of this
                agreement. As a Unicity Distributor, I consent to Unicity
                contacting me at the telephone and fax number(s) and/or e-mail
                address I have provided with my application.
              </p>
              <p className={classes.disclaimer}>
                Please submit your KYC document within 30 days to avoid
                suspension of your account.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      </div>


      <Link to="/account_setup">
        <button>Go Back</button>
      </Link>
    </div>
  );
};
export default Summary;
