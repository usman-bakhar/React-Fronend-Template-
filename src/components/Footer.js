import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import { Typography } from '@material-ui/core';

// import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop: 0,
    height: "8rem",
    background: "#222222",
    opacity: "0.66",
    [theme.breakpoints.down("lg")]: {
      height: "12rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "12rem",
    },
  },

  footer: {
    textAlign: "center",
    color: "#EBEBEB;",
    paddingTop: "5rem",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "3rem",
    },
  },

  iconContainer: {
    color: "#EBEBEB;",
    paddingTop: "5rem",
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "1rem",
      display: "flex",
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <>
      <div style={{ height: "50px" }} />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7} lg={7}>
            {/* <div className={classes.footerContainer}> */}
            <div className={classes.footer}>
              Copyright 2016. All Rights Reserved, Mobius Inc.
            </div>
            {/* </div> */}
          </Grid>

          <Grid item xs={12} md={5} lg={5}>
            <div className={classes.iconContainer}>
              <i class="fa fa-github" aria-hidden="true"></i>
              <div style={{ paddingLeft: "10px" }} />
              <i class="fa fa-facebook fa" aria-hidden="true"></i>
              <div style={{ paddingLeft: "10px" }} />
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <div style={{ paddingLeft: "10px" }} />
              <i class="fa fa-google-plus" aria-hidden="true"></i>
              <div style={{ paddingLeft: "10px" }} />
              <i class="fa fa-linkedin" aria-hidden="true"></i>
              <div style={{ paddingLeft: "10px" }} />
              <i class="fa fa-tumblr" aria-hidden="true"></i>
              <div style={{ paddingLeft: "10px" }} />
              <i class="fa fa-github" aria-hidden="true"></i>
              <div style={{ paddingLeft: "10px" }} />
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
