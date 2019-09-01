import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const FooterStyle = {
    position: "sticky",
    height: "10%"
};

const Footer = () => (
    <AppBar  color="default" elevation={0} style = {FooterStyle}>
        <p>
            All Rights Reserved
            © 2019 Chintushig Ochirsukh
        </p>
    </AppBar>
);

export default Footer;