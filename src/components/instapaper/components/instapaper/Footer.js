import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const FooterStyle = {
    marginTop: '10px',
    position: "sticky",
    height: "10%"
};

const Footer = () => (
    <AppBar  color="default" elevation={0} style = {FooterStyle}>
        <p>
            This page is powered by reactJS. please hire me
            © 2019 Chintushig Ochirsukh
        </p>
    </AppBar>
);

export default Footer;