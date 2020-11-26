import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: '4rem',
      marginRight: '4rem',
      [theme.breakpoints.down('sm')]: {
        marginLeft: '1rem',
        marginRight: '1rem',
        textAlign: 'center',
      },
    },
    paper: {
      padding: theme.spacing(6.8),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0),
      },
      color: theme.palette.text.secondary,
    },
  }));

function Info(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
                
            <Grid container spacing={1} >
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <div className={classes.paper}>
                        <i className="fa fa-motorcycle fa-5x"></i>
                        <h3>We Are Passionate</h3>
                        <Typography variant="body1" gutterBottom>
                            Phasellus enim libero, blandit vel sapien vitae, 
                            condimentum ultricies magna estasente et. 
                            Quisque euismod orci ut et lobortis aliquam.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <div className={classes.paper}>
                        <i class="fa fa-cogs fa-5x"></i>
                        <h3>Quick & Easy Setup</h3>
                        <Typography variant="body2" gutterBottom>
                            Phasellus enim libero, blandit vel sapien vitae, 
                            condimentum ultricies magna estasente et. 
                            Quisque euismod orci ut et lobortis aliquam.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <div className={classes.paper}>
                        <i class="fa fa-wrench fa-5x"></i>
                        <h3>Updates & Support</h3>
                        <Typography variant="body2" gutterBottom>
                            Phasellus enim libero, blandit vel sapien vitae, 
                            condimentum ultricies magna estasente et. 
                            Quisque euismod orci ut et lobortis aliquam.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <div className={classes.paper}>
                        <i class="fa fa-line-chart fa-5x"></i>
                        <h3>Fleible & Moduler</h3>
                        <Typography variant="body2" gutterBottom>
                            Phasellus enim libero, blandit vel sapien vitae, 
                            condimentum ultricies magna estasente et. 
                            Quisque euismod orci ut et lobortis aliquam.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <div className={classes.paper}>
                        <i class="fa fa-wordpress fa-5x"></i>
                        <h3>Woocommerce Integration</h3>
                        <Typography variant="body2" gutterBottom>
                            Phasellus enim libero, blandit vel sapien vitae, 
                            condimentum ultricies magna estasente et. 
                            Quisque euismod orci ut et lobortis aliquam.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <div className={classes.paper}>
                        <i class="fa fa-stethoscope fa-5x"></i>
                        <h3>WPML Ready</h3>
                        <Typography variant="body2" gutterBottom>
                            Phasellus enim libero, blandit vel sapien vitae, 
                            condimentum ultricies magna estasente et. 
                            Quisque euismod orci ut et lobortis aliquam.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
          
        </div>
      );
}

export default Info;

