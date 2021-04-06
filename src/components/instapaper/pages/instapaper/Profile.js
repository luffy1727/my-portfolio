import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import atoms from '../../components/atoms';
import Header from '../../components/instapaper/Header';
import Footer from '../../components/instapaper/Footer';
import theme from '../../theme/instapaper/theme';
import withTheme from './withTheme';
import Blogs from '../../../.././components/blogs/blogs';
import Github from '../../../.././components/github/github';
import AndroidIcon from '@material-ui/icons/AndroidOutlined';
import GridOnOutLinedIcon from '@material-ui/icons/GridOnOutlined';
import molecules from '../../components/molecules';

import "react-tabs/style/react-tabs.css";

const { Avatar, Typography} = atoms;
const { Tabs, Tab } = molecules;

const useStyles = makeStyles({
  editButton: {
    marginLeft: 0,
    marginTop: 12,
    color: '#ffffff',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 20,
      marginTop: 0,
    },
  },
  settings: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 5,
    },
  },
});
const textStyles = {
  lineHeight: '5px'
}

function ProfilePage() {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);
  const upSm = useMediaQuery(theme.breakpoints.up('sm'), { defaultMatches: true });

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Box component="main" maxWidth={935} margin="auto" padding="60px 20px 0">
        <Box mb="44px">
          <Grid container>
            <Grid item xs={4}>
              <Avatar
                ultraLarge={upSm}
                medium={!upSm}
                style={{ margin: 'auto' }}
                alt="My profile"
                src="https://luffy1727.github.io/my-portfolio/avatar.png"
              />
            </Grid>
            <Grid item xs={8}>
              <Box clone mb="20px">
                <Grid container alignItems="center">
                  <Typography component="h1" variant="h4" lightWeight>
                    Chintushig Ochirsukh
                  </Typography>
                  <Button className={classes.editButton}
                          target = '_blank'
                          variant="outlined"
                          style={{
                            backgroundColor: "#3897f0"
                          }}
                          fullWidth={!upSm}
                          href="https://luffy1727.github.io/my-portfolio/CHINTUSHIG_OCHIRSUKH_RESUME.pdf"
                          >
                    Resume
                  </Button>
                </Grid>
              </Box>
             <Github />
              <div>
                <div style = {textStyles}>
                  <Typography variant="subtitle1" bold>Tushige</Typography>
                </div>
                <div>
                  <Typography variant="subtitle1">Backend Developer @AndSystems</Typography>
                </div>
                <div>
                  <Typography variant="subtitle1">Code, Design and everything in between</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box mb="44px">
        <Tabs
          value={tabIndex}
          centered
          onChange={(event, value) => {
            setTabIndex(value);
          }}
        >
          <Tab label="Projects" icon={<GridOnOutLinedIcon/>} />
        </Tabs>
        <Blogs/>
        </Box>
      </Box>
      <Footer/>
    </React.Fragment>
  );
}

export default withTheme(theme)(ProfilePage);
