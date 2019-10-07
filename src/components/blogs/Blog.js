import React from 'react';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import IconButton from '@material-ui/core/IconButton';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { makeStyles } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import atoms from '../instapaper/components/atoms';
// import Box from '@material-ui/core/Box';
// import GridOnOutLinedIcon from '@material-ui/icons/GridOnOutlined';
// import AndroidIcon from '@material-ui/icons/Android';
// import SettingsIcon from '@material-ui/icons/Settings';

import Footer from '../instapaper/components/instapaper/Footer';
import theme from '../instapaper/theme/instapaper/theme';
import withTheme from '../instapaper/pages/instapaper/withTheme';


function Blog() {
//   const [tabIndex, setTabIndex] = React.useState(0);
//   const upSm = useMediaQuery(theme.breakpoints.up('sm'), { defaultMatches: true });

  return (
    <React.Fragment>
      <Footer/>
    </React.Fragment>
  );
}

export default withTheme(theme)(Blog);
