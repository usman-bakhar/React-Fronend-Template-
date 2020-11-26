import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import 'antd/dist/antd.css';
import { Statistic } from 'antd';
import { BackTop } from 'antd';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    padding: '0 2rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  backTop: {
    height: 50,
    width: 50,
    lineHeight: '60px',
    borderRadius: 25,
    backgroundColor: '#b8b894',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
}));
  
export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
            <Statistic title="Active Users " value={112893} precision={0} valueStyle={{color: 'tomato'}}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Statistic title="Active Users " value={112893} precision={0} valueStyle={{color: 'tomato'}}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Statistic title="Active Users " value={112893} precision={0} valueStyle={{color: 'tomato'}}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Statistic title="Active Users " value={112893} precision={0} valueStyle={{color: 'tomato'}}/>
        </Grid>
      </Grid>
      <div style={{height: '70px'}} />
        <div>
            <BackTop>
                <div className={classes.backTop} >
                    <i class="fa fa-arrow-up fa-2x"></i>
                </div>
            </BackTop>
        </div>
    </div>
  );
}
