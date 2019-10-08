import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const FooterStyle = {
    padding: '25px 15px 0px 15px',
    position: "sticky",
    height: "10%",
    backgroundColor: "#fafafa",
    textAlign: "center"
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