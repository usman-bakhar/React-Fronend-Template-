import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#F5F6FA',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#f2f2f2'
    },

    textH3: {
        marginLeft: '12rem', 
        marginTop: '5rem', 
        color:'#59585b',
        [theme.breakpoints.down('xs')]: {
            margin: '4rem 1rem 0rem 1rem', 
            textAlign: 'center' 
    },
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4rem',
    marginBottom: '5rem',
  },
  title: {
    lineHeiht: '46px',
    fontWeght: '400',
    fontStyl: 'normal',
    fontSize: '40px',
    textAlign: 'center',
    marginTop: '3rem',
    color: '#59585B',
  },
  workTitle: {
    marginTop: '6rem',
    fontSize: '18px',
},
  }));
  

function OurWorks(props) {
    const classes = useStyles();

    const [value, setValue] = useState();

    const handleChange = (event, newVal) => {
        setValue(newVal);
    }

    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12}>
                    <div className={classes.title}>
                    <Typography variant='h4' style={{fontFamily: 'Raleway'}}>
                        Latest <strong>Works</strong>
                    </Typography>
                    </div>
                    <div style={{height: '25px'}} />
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.root}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor='secondary'
                            textColor='secondary'
                            centered
                        >
                            <Tab label="All" />
                            <Tab label="Art" />
                            <Tab label="Branding" />
                            <Tab label="Identity" />
                            <Tab label="Mockup" />
                        </Tabs>
                    </Paper>
                </Grid>

                <Grid item xs={12} container spacing={0}>
                <Grid item xs={12} md={3} >
                    <Paper className={classes.paper} >
                        <div className={classes.workTitle}>
                            <p>OLD <strong>CAMERA</strong></p>
                            <p>Art</p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper className={classes.paper} >
                        <div className={classes.workTitle}>
                            <p>SKETCH <strong>BOXX</strong></p>
                            <p>Art/Mockup</p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper} >
                        <div className={classes.workTitle}>
                            <p>ECO <strong>BAG</strong></p>
                            <p>Art/Mockup</p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper} style={{height: '250px'}}>
                        <div className={classes.workTitle}>
                            <p>CIRCLE <strong>PAIR</strong></p>
                            <p>Mockup</p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Paper className={classes.paper} style={{height: '250px'}}>
                        <div className={classes.workTitle}>
                            <p>BRUSH <strong>BOX</strong></p>
                            <p>Art</p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper className={classes.paper} style={{height: '250px'}}>
                        <div className={classes.workTitle}>
                            <p>FLASK <strong>BOTTLE</strong></p>
                            <p>Identity/Mockup</p>
                        </div>
                    </Paper>
                </Grid>
                </Grid>

                <Grid item xs={12} container>
                    <Grid item xs={12} md={6} >
                        <h3 className={classes.textH3}>
                            <em>Like what you see? Check our complete work.</em>
                        </h3>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.btnContainer}>
                            <Button 
                                variant='outlined' 
                                color='inherit'
                                style={{borderRadius: '35px'}}
                            >
                                Purchase
                            </Button>
                        </div>
                    </Grid>
                </Grid>
          </Grid>
        </div>
      );
}

export default OurWorks;




