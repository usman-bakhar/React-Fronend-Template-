import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#222222",
    opacity: "0.50",
    color: "#e8e8e8",
    padding: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" color="inherit">
            Mobius
          </Typography>
          <div style={{ height: "25px" }} />
          <Typography variant="body1">
            mobius Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Pellentesque consequat quam et augue laoreet
            ac hendrerit mauris tempus. Vivamus leo ante, consectetur sit amet
            vulputate vel, dapibus sit amet lectus.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h4" color="inherit">
            Recent Projects
          </Typography>
          <div style={{ height: "25px" }} />
          <Typography variant="body1">
            mobius Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Pellentesque consequat quam et augue laoreet
            ac hendrerit mauris tempus. Vivamus leo ante, consectetur sit amet
            vulputate vel, dapibus sit amet lectus.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h4" color="inherit">
            Tags
          </Typography>
          <div style={{ height: "25px" }} />
          <div className={classes.tags}>
            <Button
              variant="outlined"
              color="inherit"
              style={{ borderRadius: "35px" }}
            >
              Art
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              style={{ borderRadius: "35px" }}
            >
              Author
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              style={{ borderRadius: "35px" }}
            >
              Creation
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              style={{ borderRadius: "35px" }}
            >
              Custom
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              style={{ borderRadius: "35px" }}
            >
              Design
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              style={{ borderRadius: "35px" }}
            >
              HTML
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              style={{ borderRadius: "35px" }}
            >
              Link
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              style={{ borderRadius: "35px" }}
            >
              Music
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              style={{ borderRadius: "35px" }}
            >
              Photoghrphy
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              style={{ borderRadius: "35px" }}
            >
              Qoute
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              style={{ borderRadius: "35px" }}
            >
              Standard
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              style={{ borderRadius: "35px" }}
            >
              Wordpress
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
