import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
import { Grid } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import StepperBar from './StepperBar';

import { Link } from "react-router-dom";

const useStyles = createUseStyles({
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
    paddingBottom: "8px",
    fontWeight: "400",
    lineHeight: "1.1",
    textAlign: "left",
    position: "relative",
    paddingTop: "20px",
  },
  testClass: {
    width: "",
  },
  formControl: {
    display: "block",
    //marginLeft: "13px",
    height: "46px",
    lineHeight: "46px",
    width: "100%",
    color: "#555555",
    backgroundColor: "#ffffff",
    backgroundImage: "none",
    border: "1px solid #cccccc",
    textTransform: "none",
    position: "relative",
    //marginTop: "5px",
    //marginTop: "20px",
    margin: "10px 305px 3px 14px",
    borderRadius: "6px",
  },
  inputTitle: {
    //margin: "5px 588px 3px 14px",
    fontSize: "20px",
    color: "#777b7c",
    fontWeight: "normal",
    fontSize: "14px",
    height: "40px",
    //paddingBottom: "45px",
    margin: "10px 305px 3px 14px",
  },
  gridspacing: {
    paddingTop: "15px",
  },
});
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const AccountSetup = () => {
  const classes = useStyles();

  return (
    <Fragment>
         <div>
        <StepperBar></StepperBar>
      </div>
      Account Setup with React final form
      <div className={classes.pageWrapper}>
        <div>
          <h2 className={classes.heading}>Enrollment Settings</h2>
        </div>
        {/* <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
              
            <form onSubmit={handleSubmit} noValidate>
              <Grid
                container
                alignItems="flex-start"
                spacing={2}
                direction="row"
                justify="space-evenly"
              >
                <Grid item  xs={3} sm={6}>
                  <div>
                    <label>Favorite Color</label>
                    <Field name="favoriteColor" component="select">
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                    </Field>
                  </div>
                </Grid>
                <Grid item  xs={3} sm={6} lg = {3}>
                  <div>
                    <label>First Name</label>
                    <Field 
                      fullWidth
                      required
                      name="firstName"
                      component="input"
                      type="text"
                      label="First Name"
                    />
                  </div>
                </Grid>
                
              </Grid>
            </form>
          )}
        ></Form> */}
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container spacing={3}>
                <Grid item md={12}>
                  <div style={{ textAlign: "left", marginLeft: "15px" }}>
                    <span>
                      Please fill out the enrollment application below
                    </span>
                  </div>
                </Grid>
                <Grid item xs md={3}>
                  <label className={classes.inputTitle}>Language</label>
                  <Field name="firstName">
                    {(props) => (
                      <div>
                        <select className={classes.formControl}>
                          <option className={classes.formControl}>Hindi</option>
                          <option className={classes.formControl}>
                            English
                          </option>
                        </select>
                      </div>
                    )}
                  </Field>
                </Grid>

                <Grid item xs md={3}>
                  <label className={classes.inputTitle}>
                    Your Enroller's ID:
                  </label>
                  <Field name="enroller_id">
                    {(props) => (
                      <div>
                        <input
                          type="text"
                          className={classes.formControl}
                        ></input>
                      </div>
                    )}
                  </Field>
                </Grid>

                <Grid item xs md={3}>
                  <label className={classes.inputTitle}>
                    Your Sponsor's ID:
                  </label>
                  <Field name="sponsor_id">
                    {(props) => (
                      <div>
                        <input
                          type="text"
                          className={classes.formControl}
                        ></input>
                      </div>
                    )}
                  </Field>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <span className={classes.inputTitle}>
                    If you do not know your Enroller's or Sponsor’s ID, please
                    contact Unicity Customer Service at 1-800-102-2467 click
                    here to <a href="#">enquiry</a>
                  </span>
                </Grid>
              </Grid>
              <div>
                <div>
                  <h2 className={classes.heading}>About you</h2>
                </div>
              </div>

              <div className={classes.gridspacing}>
                <Grid container spacing={3}>
                  <Grid item xs md={3}>
                    <label className={classes.inputTitle}>First Name</label>
                    <Field name="FirstName">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs md={3}>
                    <label className={classes.inputTitle}>Last Name</label>
                    <Field name="lastName">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs md={3}>
                    <label className={classes.inputTitle}>
                      Birth date: (dd/mm/yyyy)
                    </label>
                    <Field name="dob">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                </Grid>
              </div>

              <div className={classes.gridspacing}>
                <Grid container spacing={2}>
                  <Grid item md={3}>
                    <label className={classes.inputTitle}>
                      Phone(10 digit numbers):
                    </label>
                    <Field name="phone">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item md={3}>
                    <label className={classes.inputTitle}>Email</label>
                    <Field name="email">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item md={3}>
                    <label className={classes.inputTitle}>
                      PAN: (optional){" "}
                    </label>
                    <Field name="pan">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                </Grid>
              </div>

              <div className={classes.gridspacing}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <label className={classes.inputTitle}>
                      Gender (optional)
                    </label>
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
                    Female
                    <input
                      type="radio"
                      className={classes.radioStyle}
                      style={{ display: "inline" }}
                    />
                    Transgender
                  </Grid>
                  <Grid item xs={3}>
                    <label className={classes.inputTitle}>
                      Maritial Status
                    </label>
                    <input
                      type="radio"
                      className={classes.radioStyle}
                      style={{ display: "inline" }}
                    />
                    Single
                    <input
                      type="radio"
                      className={classes.radioStyle}
                      style={{ display: "inline" }}
                    />
                    Married
                  </Grid>
                  <Grid item xs={3}>
                    <label className={classes.inputTitle}>
                      {" "}
                      I want to receive email communications related to my
                      business{" "}
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
                    <label className={classes.inputTitle}>Fullname </label>
                    <Field name="co_fullName">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item md={3}>
                    <label className={classes.inputTitle}>Relationship</label>
                    <Field name="relation">
                      {(props) => (
                        <div>
                          <select className={classes.formControl}>
                            <option className={classes.formControl}>
                              Spouse
                            </option>
                            <option className={classes.formControl}>
                              Child
                            </option>
                            <option className={classes.formControl}>
                              Parent
                            </option>
                            <option className={classes.formControl}>
                              Sibling
                            </option>
                          </select>
                        </div>
                      )}
                    </Field>
                  </Grid>
                </Grid>
              </div>

              <div>
                <h2 className={classes.heading}>Mailing Address</h2>
              </div>

              <div className={classes.gridspacing}>
                <Grid container spacing={2}>
                  <Grid item md={3}>
                    <label className={classes.inputTitle}>Address 1</label>
                    <Field name="Add_1">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item md={3}>
                    <label className={classes.inputTitle}>Address 2</label>
                    <Field name="Add_2">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item md={3}>
                    <label className={classes.inputTitle}>City</label>
                    <Field name="City">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                </Grid>
              </div>

              <div style={{ marginTop: "30px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <label className={classes.inputTitle}>State</label>
                    <Field name="relation">
                      {(props) => (
                        <div>
                          <select className={classes.formControl}>
                            <option className={classes.formControl}>
                              Karnataka
                            </option>
                            <option className={classes.formControl}>
                              Tamilnadu
                            </option>
                          </select>
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={3}>
                    <label className={classes.inputTitle}>Postal Code</label>
                    <input type="text" className={classes.formControl}></input>
                  </Grid>
                  <Grid item xs={3}>
                    <label className={classes.inputTitle}>Postal Code</label>
                    <Field name="postal-code">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
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
                    <label className={classes.inputTitle}>
                      {" "}
                      Account Number{" "}
                    </label>
                    <Field name="acc-num">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={3}>
                    <label className={classes.inputTitle}>
                      {" "}
                      Account Title(account name as per bank records){" "}
                    </label>
                    <Field name="acc-nolder">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={3}>
                    <label className={classes.inputTitle}> Bank Name </label>
                    <Field name="bank_name">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                </Grid>
              </div>

              <div style={{ marginTop: "30px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <label className={classes.inputTitle}> Branch Name </label>
                    <Field name="bran_name">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>{" "}
                  </Grid>
                  <Grid item xs={3}>
                    <label className={classes.inputTitle}> IFSC </label>
                    <Field name="ifsc">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>{" "}
                  </Grid>
                  <Grid item xs={3}>
                    <label className={classes.inputTitle}>
                      {" "}
                      Swift Code(optional){" "}
                    </label>
                    <Field name="swift">
                      {(props) => (
                        <div>
                          <input
                            type="text"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
                  </Grid>
                </Grid>
              </div>

              {/* <div>
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
              <Field name="swift">
                      {(props) => (
                        <div>
                          <input
                            type="password"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>
                Retype your password:
              </label>
              <Field name="swift">
                      {(props) => (
                        <div>
                          <input
                            type="password"
                            className={classes.formControl}
                          ></input>
                        </div>
                      )}
                    </Field>
            </Grid>
          </Grid>
        </div>

        <div style={{ marginTop: "30px" }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label className={classes.inputTitle}>
                {" "}
                Password status bar{" "}
              </label>
            </Grid>
            <Grid item xs={3}>
              <label className={classes.inputTitle}> Show Password </label>
              <input type="checkbox" className={classes.formControl}></input>
            </Grid>
          </Grid>
        </div>
         */}
            </form>
          )}
        ></Form>
      </div>
      <Link to="/">
        <button>GoBack</button>
      </Link>
      <Link to="/summary">
        <button>Continue</button>
      </Link>
    </Fragment>
  );
};
export default AccountSetup;
