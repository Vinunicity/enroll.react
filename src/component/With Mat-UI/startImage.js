import React, { Fragment } from "react";
import startBg from "../common/img/start-bg.png";

const startImage = (props) => {
  return (
    <Fragment>
      <img alt="start-bg" src={startBg} className ={props.className}></img>
    </Fragment>
  );
};

export default startImage;