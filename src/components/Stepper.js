import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Grid from "@material-ui/core/Grid";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

const tutorialSteps = [
  {
    label: "Make sure you are following for all your ThemeForest needs!",
    // imgPath:
    //   'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: "Eight marketplaces, one Envato Market. ",
    // imgPath:
    //   'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label:
      " With heartfelt thanks to YOU we have busted into the Worlds Top 100 ranking on Alexa! WOOHOO! ",
    // imgPath:
    //   'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#999999",
    height: 300,
    padding: theme.spacing(0, 40),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 20),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 10),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 2),
    },
    backgroundColor: theme.palette.background.default,
  },
}));

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper square elevation={0} className={classes.header}>
            {/* <div><i class="fa fa-twitter" aria-hidden="true"></i></div><br /> */}
            <Typography variant="h5">
              {tutorialSteps[activeStep].label}
            </Typography>
          </Paper>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            }
          />
        </Grid>
      </Grid>
    </div>
  );
}
