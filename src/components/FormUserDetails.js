import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import '../App.css';

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
  container: {
    alignItems: 'center',
    
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
});

class FormUserDetails extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { classes } = this.props;
    const { values, handleChange } = this.props;
    return (
      <div className={classes.root}>
        <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h5">
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            label='First Name'
            value={values.firstName}
            onChange={handleChange('firstName')}
            margin="normal"
            variant="outlined"
          />
          <br/>
           <TextField
            label='Last Name'
            value={values.lastName}
            onChange={handleChange('lastName')}
            margin="normal"
            variant="outlined"
          />
          <br/> 
          <TextField
            label='Email'
            value={values.email}
            onChange={handleChange('email')}
            margin="normal"
            variant="outlined"
          />
          <br/>
          <Button 
            label='Continue' 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={this.continue}
          >
            Continue
          </Button>
        </form>
        </React.Fragment>
       </div>
    );
  }
}

export default withStyles(styles)(FormUserDetails)
