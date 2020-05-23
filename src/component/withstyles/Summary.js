import React from "react";
import { Grid } from "@material-ui/core";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  stepper_title: {
    margin: "15px",
    padding: "0px",
    fontSize: "15px",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  page_body: {
    background: "#eeeff0",
    marginRight: "-15px",
    marginLeft: "-15px",
    padding: "15px",
    marginTop: "-10px",
  },
  page_title: {
    background: "none",
    fontSize: "21px",
    fontWeight: 700,
    color: "#666",
    fontFamily: "inherit",
    lineHeight: 1.1,
    margin: "15px",
    padding: "0",
    marginTop: "-10px",
  },
  section_head: {
    color: "#fff",
    background: "#777b7c",
    margin: "0px 14px",
    padding: "7.5px 15px",
    fontSize: "16.8px",
    fontWeight: "400",
    lineHeight: 1.1,
    fontFamily: "inherit",
  },
  tab_body: {
    background: "white",
    fontSize: "14px",
    color: "#333333",
    margin: "0px 14px",
    padding: "7.5px 15px",
    fontSize: "16.8px",
    fontWeight: "400",
    lineHeight: 1.1,
    fontWeight: "bold",
    width: "41%",
  },
});
const Summary = () => {
  const classes = useStyles();
  return (
    <div>
      <div>Steper model</div>
      <div>
        <div className={classes.stepper_title}>Complete</div>
      </div>
      <div className={classes.page_body}>
        <div>
          <h2 className={classes.page_title}>Enrollment Summary </h2>
        </div>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <div>
                <h2 className={classes.section_head}>Enrollment Settings</h2>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing = {2}  className ={classes.tab_body} >
              <Grid item xs ={6} >
                  <table>
                    <tr>
                      <td>Country</td>
                      <td>India</td>
                    </tr>
                  </table>
              </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Summary;
