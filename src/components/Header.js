import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4)
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      marginLeft: '3rem',
    },
    [theme.breakpoints.up("md")]: {
      flexGrow: 1,
      marginLeft: '3rem',
    },

  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly"
  },
  appbar: {
    backgroundColor: '#333333',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.05)',
    color: '#E8E8E8',
  }
}));

const Header = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title} style={{color: 'white', fontFamily: 'Raleway'}}>
            Mobius
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem>Home</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>About</MenuItem>
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
                <MenuItem>Home</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>About</MenuItem>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;