import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Hidden from '@material-ui/core/Hidden';
import Search from '@material-ui/icons/Search';
import atoms from '../atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';

const { Divider, Toolbar } = atoms;

const IconStyle = {
  fontSize: "25",
  marginLeft: "1em"
};

const logo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbW8vOS9If-qdZ7-4SL30yXffg9sRyryDcil-2I8JoKSp36CKxw';

const Header = () => (
  <AppBar position="sticky" color="default" elevation={0}>
    <Toolbar narrow>
      <Grid container alignItems="center">
        <Grid item xs>
          <Grid container alignItems="center">
            <img alt="logo" src={logo} className="image__instagram-logo" />
            <Divider vertical />
            <img alt="label" className="image__instagram-label" src={require('./logo2.png')} />
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid item xs>
            <TextField
              variant="outlined"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Hidden>
        <Grid item>
          <Grid container justify="flex-end">
            <a target="_blank" href="https://github.com/luffy1727"><FontAwesomeIcon icon={ faGithub } style = {IconStyle}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/chintushig-ochirsukh-4a00a275"><FontAwesomeIcon icon={ faLinkedin } style = {IconStyle}/></a>
            <a target="_blank" href="https://www.instagram.com/binariesinspace/"><FontAwesomeIcon icon={ faInstagram } style = {IconStyle}/></a>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Header;