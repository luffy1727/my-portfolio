import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const FooterStyle = {
    // padding: '25px 15px 0px 15px',
    position: "fixed",
    height: "10%",
    backgroundColor: "white", // transparent bolgoh
    textAlign: "center",
    zIndex: "-1",
    marginBottom: "-50px",
    top: "unset",
    bottom: "0"
};

const Footer = () => (
    <AppBar color="default" elevation={0} style = {FooterStyle}>
        <p>
            This page is powered by reactJS. please hire me
            © 2019 Chintushig Ochirsukh
        </p>
    </AppBar>
);

export default Footer;