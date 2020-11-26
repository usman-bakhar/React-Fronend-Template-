import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '3rem',
      backgroundColor: '#2B2D2F',
      opacity: '0.4',
      filter: 'Alpha(Opacity:40)',
    },
    paper: {
      padding: theme.spacing(5),
    },
    txtCenterH6: {
        fontFamily: 'Raleway',
        textAlign: 'center',
        fontSize: '20px',
        color: 'white',
        lineHeight: '20px',
        fontWeight: '600',
        fontStyle: 'normal',
        marginBottom: '0rem',
    },

    hr: {
        width: '50px',
        marginTop: '1rem',
    },

    txtCenterH1: {
        fontFamily: "Source Sans Pro",
        lineHeight: '45px',
        fontWeight: '200',
        fontStyle: 'normal',
        fontSize: '35px',
        color: 'white',
        textAlign: 'center',
    },
    btnContainer: { 
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4rem',
        marginBottom: '2.5rem',
        color: 'white'
    },
  }));

function ThemeoneParallax(props) {
    const classes = useStyles();

    const handleClick = () => {
        alert('You Clicked')
    }

    return (
        <>
        <div className={classes.root}>
                
            <Grid container spacing={1} className={classes.paper} >
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <h6 className={classes.txtCenterH6}>TEMEONE PARALLA</h6>
                    <hr className={classes.hr} />
                    <h1 className={classes.txtCenterH1}>CREATIVIY IS INTELLIGENCE HAVING FUN</h1>
                    <div className={classes.btnContainer}>
                        <Button
                            variant='outlined'
                            color='inherit'
                            style={{borderRadius: '35px'}}
                            onClick={handleClick}
                        >
                            See more
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
        </>
    );
}

export default ThemeoneParallax;