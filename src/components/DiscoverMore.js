import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
  red: {
    // display: 'flex',
    height: '18rem',
    textAlign: 'end',
    backgroundColor: 'rgb(255, 104, 99)',
    padding: '1rem',

  },
  Ftitle: {
    fontFamily: 'Raleway',
    lineHeight: '28px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: '20px',
    color:'#ffffff',
  },
  Ftext: {
    color:'#ffffff',
  },
  imgs: {
    backgroundColor: '#F5F6FA',
    textAlign: 'center',
    padding: '1.5rem',
    height: '18rem',
  },
  Stitle: {
    fontFamily: 'Raleway',
    lineHeight: '28px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: '20px',
    color: '#59585b',
  },
  Stext: {
    color: '#59585b',
    paddingLeft: '4rem',
    paddingRight: '4rem',
    [theme.breakpoints.down('xs')]: {
      // paddingLeft: '1rem',
      // paddingRight: '1rem',
      padding: '0 0rem 0 0rem',
    }
  },
}));

function DiscoverMore() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <div className={classes.red}>
            <div style={{height:'65px'}} />
            <h3 className={classes.Ftitle}>GREAT DESIGN & COOL FEATURES</h3>
            <p className={classes.Ftext}>
                Quisque porta ipsum quis neque elementum lacinia. Pellentesque ut risus rutrum, tristique lacus nec, mollis risus. Vestibulum mollis erat arcu, eu vehicula purus consequat nec nulla turpis leo, aliquet.
            </p>
          </div>
        </Grid>
        
        <Grid item xs={12} md={8}>
            <div className={classes.imgs}>
                <div style={{height:'65px'}} />
                <h3 className={classes.Stitle}>GREAT DESIGN & COOL FEATURES</h3>
                <p className={classes.Stext}>
                    Quisque porta ipsum quis neque elementum lacinia. Pellentesque ut risus rutrum, tristique lacus nec, mollis risus. Vestibulum mollis erat arcu, eu vehicula purus consequat nec nulla turpis leo, aliquet.
                </p>
            </div>
        </Grid>
      </Grid>
      <div style={{height:'25px'}} />
    </div>
  );
}

export default DiscoverMore;