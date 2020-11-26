import React from 'react';
import Work from './services/Work'
import Skills from './services/Skills'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import {AppBar} from '@material-ui/core' 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    fontFamily: 'Raleway',
    lineHeight: '46px',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '40px',
    textAlign: 'center',
    marginTop: '3rem',
    color: '#59585B',
  },
}));

function Services() {
  const classes = useStyles();

  const [selectedTab, setselectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setselectedTab(newValue);
  };

  return (
    <>  
    <div style={{height: '20px'}}></div>
    
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant='h4'>
                <div className={classes.title}>
                    Our <strong>Services</strong>
                </div>
            </Typography>
        </Grid>
      </Grid>
    <div style={{height: '60px'}}></div>

      <Paper className={classes.root}>
        <Tabs
            value={selectedTab}
            onChange={handleChange}
            indicatorColor='secondary'
            textColor='secondary'
            centered
        >
            <Tab label="OUR WORK" />
            <Tab label="OUR PROCESS" />
            <Tab label="OUR SKILLS" />
        </Tabs>
      </Paper>
      {selectedTab === 0 && <Work />}
      {selectedTab === 2 && <Skills />}
    </div>
    <div style={{height: '90px'}}></div>
    </>
  );
}

export default Services;