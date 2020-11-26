import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import LinearProgress from '@material-ui/core/LinearProgress';

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#59585b'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  sectionContainer: {
    margin: '0 8rem 0 8rem',
    [theme.breakpoints.down('xs')]: {
        margin: '0 1rem 0 1rem',
    },
  }
}));

function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <section>
            <div className={classes.sectionContainer}>
                <div style={{height: '50px'}}></div>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6} >
                        <div className={classes.data}>
                            <h3>We Are Professional</h3>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                <Typography className={classes.heading}>Clean & readable code</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                <Typography className={classes.heading}>Creative and Design</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                <Typography className={classes.heading}>Unlimited Possibilities</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                <Typography className={classes.heading}>Awsome Features</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>                   
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className={classes.data}>
                            <h3>Our Skills</h3>
                            <p>
                                Phasellus enim libero, blandit vel sapien vitae, 
                                condimentum ultricies magna estasente et. 
                                Quisque euismod orci ut et lobortis aliquam.
                                Phasellus enim libero, blandit vel sapien vitae, 
                                condimentum ultricies magna estasente et. 
                                Quisque euismod orci ut et lobortis aliquam.
                                Phasellus enim libero, blandit vel sapien vitae, 
                                condimentum ultricies magna estasente et. 
                                Quisque euismod orci ut et lobortis aliquam.
                            </p>
                            <br />
                            <LinearProgress  /><br />
                            <LinearProgress  /><br />
                            <LinearProgress  /><br />
                            <LinearProgress  />
                        </div>                   
                    </Grid>
                </Grid>
            </div>
      </section>
    </div>

  );
}

export default Skills;
