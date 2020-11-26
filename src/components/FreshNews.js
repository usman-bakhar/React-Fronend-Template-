import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import BorderColorIcon from '@material-ui/icons/BorderColor';
import { Typography } from '@material-ui/core';

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
iconContainer: {
    textAlign: 'center',
    color: '#ff6863;',

},
icon: {
    fontSize: '10rem',
    width: '10rem',
    height: '52px',
    lineHeight: '52px',
},

title: {
    fontFamily: 'Raleway',
    lineHeight: '46px',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '40px',
    textAlign: 'center',
    color: '#59585B',
},

paragraphContainer: {
    textAlign: 'center',
    padding: '0 24rem 0 24rem',
    color: '#59585B',
    [theme.breakpoints.down('md')]: {
      padding: '0 10rem 0 10rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 1rem 0 1rem',
    }
}
}));

function FreshNews() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{height:'65px'}} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.iconContainer} >
              <BorderColorIcon className={classes.icon}/>
          </div>
        </Grid>

        <Grid item xs={12}>
            <Typography variant='h4'>
                <div className={classes.title}>
                    Fresh <strong>News</strong>
                </div>
            </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
            <div className={classes.paragraphContainer}>
                <p>
                    Phasellus enim libero, blandit vel sapien vitae, 
                    condimentum ultricies magna estasente et. 
                    Sed ut perspiciatis unde omnis iste natus error 
                    sit voluptatem accusantium dolorem que laudantium.
                </p>
            </div>
        </Grid>
      </Grid>
      <div style={{height:'65px'}} />
    </div>
  );
}

export default FreshNews;