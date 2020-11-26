import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

  sectionContainer: {
    margin: '0 8rem 0 8rem',
    [theme.breakpoints.down('xs')]: {
        margin: '0 1rem 0 1rem',
    },
  }
}));

function Work() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <section>
            <div className={classes.sectionContainer}>
                <div style={{height: '50px'}}></div>
                <Grid container spacing={3} justify='flex-end'>
                    <Grid item xs={12} md={4} justify='flex-end'>
                        <div className={classes.icon}>
                            <i class="fa fa-recycle" aria-hidden="true" style={{color: '#ff6863'}}></i>
                        </div> 
                        <div className={classes.data}>
                            <h3>Unlimited Possibilities</h3>
                            <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna estasente et. Quisque euismod orci ut et lobortis aliquam.</p>
                        </div>                   
                    </Grid>
                    <Grid item xs={12} md={4} justify='flex-end' >
                        <div className={classes.icon}>
                            <i class="fa fa-recycle" aria-hidden="true" style={{color: '#ff6863'}}></i>
                        </div> 
                        <div className={classes.data}>
                            <h3>100% Responsive Design</h3>
                            <p>
                                Phasellus enim libero, blandit vel sapien vitae, 
                                condimentum ultricies magna estasente et. 
                                Quisque euismod orci ut et lobortis aliquam.
                            </p>
                        </div>                   
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div className={classes.icon}>
                            <i class="fa fa-recycle" aria-hidden="true" style={{color: '#ff6863'}}></i>
                        </div> 
                        <div className={classes.data}>
                            <h3>600+ Google Fonts</h3>
                            <p>
                                Phasellus enim libero, blandit vel sapien vitae, 
                                condimentum ultricies magna estasente et. 
                                Quisque euismod orci ut et lobortis aliquam.
                            </p>
                        </div>                   
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div className={classes.icon}>
                            <i class="fa fa-recycle" aria-hidden="true" style={{color: '#ff6863'}}></i>
                        </div> 
                        <div className={classes.data}>
                            <h3>Quick & Easy Setup</h3>
                            <p>
                                Phasellus enim libero, blandit vel sapien vitae, 
                                condimentum ultricies magna estasente et. 
                                Quisque euismod orci ut et lobortis aliquam.
                            </p>
                        </div>                   
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div className={classes.icon}>
                            <i class="fa fa-recycle" aria-hidden="true" style={{color: '#ff6863'}}></i>
                        </div> 
                        <div className={classes.data}>
                            <h3>Fully Customizable</h3>
                            <p>
                                Phasellus enim libero, blandit vel sapien vitae, 
                                condimentum ultricies magna estasente et. 
                                Quisque euismod orci ut et lobortis aliquam.
                            </p>
                        </div>                   
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div className={classes.icon}>
                            <i class="fa fa-recycle" aria-hidden="true" style={{color: '#ff6863'}}></i>
                        </div> 
                        <div className={classes.data}>
                            <h3>Custom Menus</h3>
                            <p>
                                Phasellus enim libero, blandit vel sapien vitae, 
                                condimentum ultricies magna estasente et. 
                                Quisque euismod orci ut et lobortis aliquam.
                            </p>
                        </div>                   
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div className={classes.icon}>
                            <i class="fa fa-recycle" aria-hidden="true" style={{color: '#ff6863'}}></i>
                        </div> 
                        <div className={classes.data}>
                            <h3>Updates & Support</h3>
                            <p>
                                Phasellus enim libero, blandit vel sapien vitae, 
                                condimentum ultricies magna estasente et. 
                                Quisque euismod orci ut et lobortis aliquam.
                            </p>
                        </div>                   
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div className={classes.icon}>
                            <i class="fa fa-recycle" aria-hidden="true" style={{color: '#ff6863'}}></i>
                        </div> 
                        <div className={classes.data}>
                            <h3>Clean & Modern Code</h3>
                            <p>
                                Phasellus enim libero, blandit vel sapien vitae, 
                                condimentum ultricies magna estasente et. 
                                Quisque euismod orci ut et lobortis aliquam.
                            </p>
                        </div>                   
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div className={classes.icon}>
                            <i class="fa fa-recycle" aria-hidden="true" style={{color: '#ff6863'}}></i>
                        </div> 
                        <div className={classes.data}>
                            <h3>900+ Icons</h3>
                            <p>
                                Phasellus enim libero, blandit vel sapien vitae, 
                                condimentum ultricies magna estasente et. 
                                Quisque euismod orci ut et lobortis aliquam.
                            </p>
                        </div>                   
                    </Grid>
{/* 
                    <Grid item xs={12} md={4} >
    
                    </Grid>
                    <Grid item xs={12} md={4} >
    
                    </Grid> */}
                </Grid>
            </div>
      </section>
    </div>

  );
}

export default Work;
