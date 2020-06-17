import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import atoms from '../atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const { Toolbar } = atoms;

const IconStyle = {
  fontSize: "25",
  marginLeft: "1em"
};

const Header = () => (
  <AppBar style = {{zIndex : "1"}} position="sticky" color="default" elevation={0}>
    <Toolbar narrow>
      <Grid container alignItems="center">
        <Grid item xs>
          <Grid container alignItems="center">
            <img alt="label" className="image__instagram-label" src={require('./logo2.png')} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="flex-end">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/luffy1727"><FontAwesomeIcon icon={ faGithub } style = {IconStyle}/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chintushig-ochirsukh-4a00a275"><FontAwesomeIcon icon={ faLinkedin } style = {IconStyle}/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/binariesinspace/"><FontAwesomeIcon icon={ faInstagram } style = {IconStyle}/></a>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Header;
