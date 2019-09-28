import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../App.css';

const styles = theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
 });

class Success extends Component {
  
  render() {
  const { classes } = this.props;
  return (
    <div>
    <React.Fragment>
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h5">
        Success
        </Typography>
      </Toolbar>
      </AppBar>
      <h1>Thank You For Your Submission</h1>
      <p>You will get an email with further instructions</p>
    </React.Fragment>
    </div>
  );
  }
}

export default withStyles(styles)(Success);