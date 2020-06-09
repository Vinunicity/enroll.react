import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { Form, Field } from "react-final-form";

import { Grid } from "@material-ui/core";
import uniEnrollLogo from "./common/img/unicity-enroll.png";
import StepperBar from "./StepperBar";
const useStyles = createUseStyles({
  logo: {
    marginLeft: "14px",
    padding: "2px",
    display: "block",
    float: "left",
    marginBottom: "3px",
    marginTop: "18px",
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
    margin: "8px 10px 3px 14px",
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
  row: {
    marginLeft: "15px",
    marginRight: "15px",
  },
  col_sm: {
    width: "33.33%",
    position: "relative",
    minHeight: "1px",
    paddingLeft: "15px",
    paddingRight: "15px",
    float: "left",
  },
  formGroup: {
    marginBottom: "15px",
  },
  formLabel: {
    // marginBottom:"15px",
    color: "#777b7c",
    fontWeight: "400",
    height: "40",
    display: "inline-block",
    maxWidth: "100%",
    marginBottom: "15px",
  },
  // formControl:{
  //   display:"block",
  //   width:"100%",color:"#555",
  //   backgroundColor:"#fff",
  //   backgroundImage:"none",
  //   border:"1px solid #ccc",
  // },
  inputLg: {
    padding: "10px 16px",
    fontSize: "18px",
    borderRadius: "6px",
    height: "46px",
    lineHeight: "46px",
    fontSize: "18px",
  },
  formControl: {
    display: "block",
    //marginLeft: "13px",
    height: "46px",
    lineHeight: "46px",
    width: "86%",
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
  radioStyle: {
    cursor: "pointer",
    background: "#fff",
    borderRadius: "5px",
    padding: "7px",
    width: "auto",
    marginRight: "7px",
  },

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
        <div>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item md={9} xs={3}>
              <Grid container>
                <Grid item md={12}>
                  <div className={classes.logo}>
                    <a href="http://localhost:3000/">
                      <img src={uniEnrollLogo} alt="Unicity Enroll"></img>
                    </a>
                  </div>
                </Grid>
              </Grid>
              <Grid item md={12}>
                <Grid container>
                  <Grid item md={12}>
                    <div className={classes.stepperBar}>
                      <StepperBar></StepperBar>
                    </div>
                  </Grid>
                  <Grid item md={10}>
                    <span className={classes.stepperTitle}> ACCOUNT SETUP</span>
                  </Grid>
                  {/* //TODO Current page indicator has to be Bold */}
                  <Grid item md={2} className={classes.pageIndicator}>
                    <span
                      className={classes.currentPageIndicator}
                      style={{ fontWeight: "20px" }}
                    >
                      2<span>/3</span>
                    </span>
                  </Grid>
                </Grid>
                <Grid item md={12}>
                  <div className={classes.pageWrapper}>
                    <div>
                      <h2 className={classes.heading}>Enrollment Settings</h2>
                    </div>
                    <Form
                      onSubmit={onSubmit}
                      render={({
                        handleSubmit,
                        reset,
                        submitting,
                        pristine,
                        values,
                      }) => (
                        <form onSubmit={handleSubmit} noValidate>
                          <Grid container spacing={3}>
                            <Grid item md={12}>
                              <div
                                style={{
                                  textAlign: "left",
                                  marginLeft: "15px",
                                }}
                              >
                                <span style={{ fontSize: "14px" }}>
                                  Please fill out the enrollment application
                                  below
                                </span>
                              </div>
                            </Grid>
                            <Grid item xs md={4}>
                              <label className={classes.inputTitle}>
                                Language
                              </label>
                              <Field name="firstName">
                                {(props) => (
                                  <div>
                                    <select className={classes.formControl}>
                                      <option className={classes.formControl}>
                                        Hindi
                                      </option>
                                      <option className={classes.formControl}>
                                        English
                                      </option>
                                    </select>
                                  </div>
                                )}
                              </Field>
                            </Grid>

                            <Grid item xs md={4}>
                              <label
                                className={classes.inputTitle}
                                style={{ margin: "10px 196px 3px 14px" }}
                              >
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

                            <Grid item xs md={4}>
                              <label
                                className={classes.inputTitle}
                                style={{ margin: "10px 190px 3px 14px" }}
                              >
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
                            <Grid item md={12}>
                              <div
                                style={{
                                  textAlign: "left",
                                  marginLeft: "15px",
                                  marginTop: "-15px",
                                  display: "block",
                                  marginBottom: "10px",
                                }}
                              >
                                <span
                                  style={{ fontSize: "14px", color: "#737373" }}
                                >
                                  If you do not know your Enroller's or
                                  Sponsor’s ID, please contact Unicity Customer
                                  Service at 1-800-102-2467 click here to{" "}
                                  <a href="#">enquiry</a>
                                </span>
                              </div>
                            </Grid>
                            <Grid item md={12}>
                              <div style={{ marginTop: "-36px" }}>
                                <h2 className={classes.heading}>
                                  About You{" "}
                                  <small
                                    style={{
                                      fontSize: "71%",
                                      fontWeight: "400",
                                      color: "#777",
                                      lineHeight: "1",
                                    }}
                                  >
                                    (For all future correspondence please make
                                    sure the Email ID and Contact number is
                                    valid. Your login credentials will be sent
                                    to the specified E-mail ID)
                                  </small>
                                </h2>
                              </div>
                            </Grid>

                            <Grid item xs md={4} xs={12}>
                              <label
                                className={classes.inputTitle}
                                style={{ margin: "10px 231px 3px 14px" }}
                              >
                                First Name
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
                            <Grid item xs md={4}>
                              <label
                                className={classes.inputTitle}
                                style={{ margin: "10px 236px 3px 14px" }}
                              >
                                Last Name
                              </label>
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
                            <Grid item xs md={4}>
                              <label
                                className={classes.inputTitle}
                                style={{ margin: "10px 147px 3px 14px" }}
                              >
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
                            <Grid item md={4}>
                              <label
                                className={classes.inputTitle}
                                style={{ margin: "10px 140px 3px 14px" }}
                              >
                                Phone(10 digit numbers):
                              </label>
                              <Field name="phone">
                                {(props) => (
                                  <div>
                                    <span
                                      style={{
                                        textAlign: "left",
                                        clear: "both",
                                        float: "left",
                                        marginLeft: "18px",
                                      }}
                                    >
                                      +91{" "}
                                    </span>
                                    <div>
                                      <input
                                        type="text"
                                        className={classes.formControl}
                                        style={{
                                          width: "70%",
                                          marginLeft: "62px",
                                        }}
                                      ></input>
                                    </div>
                                  </div>
                                )}
                              </Field>
                            </Grid>
                            <Grid item md={4}>
                              <label className={classes.inputTitle}>
                                Email
                              </label>
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
                            <Grid item md={4}>
                              <label
                                className={classes.inputTitle}
                                style={{ margin: "10px 207px 3px 14px" }}
                              >
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
                            <Grid item md={4}>
                              <label
                                className={classes.inputTitle}
                                style={{ margin: "10px 186px 3px 14px" }}
                              >
                                Gender (optional)
                              </label>
                              <div style={{ marginLeft: "20px" }}>
                                <input
                                  type="radio"
                                  className={classes.radioStyle}
                                  style={{
                                    display: "inline",
                                    background: "#fff",
                                  }}
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
                              </div>
                            </Grid>
                            <Grid item md={4}>
                              <label
                                className={classes.inputTitle}
                                style={{ margin: "10px 218px 3px 14px" }}
                              >
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
                            <Grid item xs={4}>
                              <label
                                className={classes.inputTitle}
                                style={{
                                  margin: "10px 185px 3px 14px",
                                  textAlign: "justify",
                                }}
                              >
                                {" "}
                                I want to receive email communications related
                                to my business{" "}
                                <span>
                                  {" "}
                                  <input type="checkbox"></input>
                                </span>
                              </label>
                            </Grid>

                            {/* <div className ={classes.row}>
                          <Grid item xs md={4} >
                            <div className={classes.col_sm, classes.formGroup}>
                              <div className={classes.formLabel}>
                  <label className={classes.formLabel} >Language</label></div>
                  <Field name="firstName">
                    {(props) => (
                      <div className={classes.formControl, classes.inputLg}>
                        <select >
                          <option >Hindi</option>
                          <option >
                            English
                          </option>
                        </select>
                      </div>
                    )}
                  </Field>
                  </div>
                </Grid>
                </div> */}
                            {/* <Grid item xs md={4}>
                  <label className={classes.inputTitle} style={{textAlign:"left"}}>Your Enroller's ID:</label>
                  <Field name="firstName">
                    {(props) => (
                     <div>
                     <input
                       type="text"
                       className={classes.formControl}
                     ></input>
                   </div>
                    )}
                  </Field>
                </Grid> */}
                          </Grid>
                        </form>
                      )}
                    ></Form>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={3} alignContent="stretch">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Grid>
          </Grid>
        </div>
      </div>

      {/* <div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item md={12}>
              <div className={classes.stepperBar}>
                <StepperBar></StepperBar>
              </div>
            </Grid>
           
          </Grid>
        </div> */}

      {/* <div>
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
      </div> */}
      {/* <div>
      <Link to="/">
        <button>GoBack</button>
      </Link>
      <Link to="/summary">
        <button>Continue</button>
      </Link>
      </div> */}
    </Fragment>
  );
};
export default AccountSetup;
