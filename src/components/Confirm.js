import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import '../App.css'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
    },
  });

class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { classes } = this.props;
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <div className={classes.root}>
        <React.Fragment>
        <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h5">
                Confirm User Data
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            <ListItemText primary='First Name' secondary={firstName} />
            <ListItemText primary="Last Name" secondary={lastName} />
            <ListItemText primary="Email" secondary={email} />
            <ListItemText primary="Occupation" secondary={occupation} />
            <ListItemText primary="City" secondary={city} />
            <ListItemText primary="Bio" secondary={bio} />
          </List>
          <br />
          <Button
            label="Confirm and Continue"
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={this.continue}
          >
            Continue
          </Button>
          <Button
            label="Back"
            variant='contained'
            color='secondary'
            className={classes.button}
            onClick={this.back}
          >
            Back
          </Button>
        </React.Fragment>
      </div>
    );
  }
}

export default withStyles(styles)(Confirm);