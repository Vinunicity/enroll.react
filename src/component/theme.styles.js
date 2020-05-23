export default {
    bodyFont: '"proxima-nova", sans-serif',
    titleFont: '"refrigerator-deluxe", sans-serif',
    screenXsMin: 0,
    screenSmMin: 600,
    screenMdMin: 960,
    screenLgMin: 1280,
    screenXlMin: 1920,
    screenXsMax: "$screenSmMin" - 1,
    screenSmMax: "$screenMdMin" - 1,
    screenMdMax: "$screenLgMin" - 1,
    screenLgMax: "$screenXlMin" - 1,
    white: "#ffffff",
    gray: "#B3B3B3",
  
    darkGray: "#1A1A1A",
    lightGray: "#808080",
    lighterGray: "#e2e4e4",
    footerGray: "#f1f2f2",
    unicityComGray: "#545456",
    unicityComLightGray: "#77787b",
    unicityOrange: "#f18b22",
    productGray: "#e6e7e8",
    footerText: "#bcbec0",
    teal: "#009490",
    red: "#d9534f",
    loginBanner: "#FEF2E2",
    brandSuccess: "#6EDAD5",
    yellow: "#f18b21",
    //red: "#DA5553",
    black: "#1a1a1a",
    orange: "#f18b21",
    blue: "#009490",
    darkBlue: "#00556f",
    orangeBtnHover: "#f49f4a",
    orangeBtnClick: "#e57f21",
    blueHover: "#4aa4a1",
    blueClick: "#008884",
    topBorderLine: "#e7e8e9",
    bold: 600,
    unicityBlue : "#409FA4",
    marineBlue : "#003764",
    noPadding: {
      padding: "0!important"
    },
    menuStyle: {
      fontSize: "15px",
      fontFamily: "$bodyFont",
      fontWeight: 500
    },
    bodyCopy: {
      fontSize: "16px",
      fontFamily: "$bodyFont"
    },
    bodyCopyMobile: {
      fontSize: "14px",
      fontFamily: "$bodyFont"
    },
    clearfix: {
      "&:before,&:after": {
        content: "' '",
        display: "table"
      },
      "&:after": {
        clear: "both"
      }
    },
    upperCase: {
      textTransform: "uppercase"
    },
    mainHeading : {
      fontSize: "36px",
      fontWeight : "600",
      color : "#545456",
      margin : "0 auto",
    },
  };
  