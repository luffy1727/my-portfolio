import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import atoms from '../../components/atoms';
import Header from '../../components/instapaper/Header';
import Footer from '../../components/instapaper/Footer';
import theme from '../../theme/instapaper/theme';
import withTheme from './withTheme';
import Box from '@material-ui/core/Box';
import Blogs from '../../../.././components/blogs/blogs';
import AndroidIcon from '@material-ui/icons/AndroidOutlined';
import KeyboardIcon from '@material-ui/icons/KeyboardOutlined';
import PhoneIcon from '@material-ui/icons/PhoneIphoneOutlined';
// import Tabs from '../../../tabs/Tabs'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


const { Avatar, Typography } = atoms;

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

const tabBarStyle =  {
  weight : '100%',
  display: 'flex',
  flexDirection: 'row',
  tableLayout: 'fixed',
  width: '100%',
}

const tabTextStyle = {
  display : 'flex',
  marginRight : '15px',
  // padding: '20px'

}

const tabStyle = {
  width: '33%',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex'
}

function ProfilePage() {
  const classes = useStyles();
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
                src={require('./avatar.png')}
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
              <Box mb="20px">
                <Grid container spacing={5}>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <b>3</b> posts
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <b>7</b> followers
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <b>27</b> following
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
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
          <Tabs>
            <TabList style = {tabBarStyle}>
              <Tab style = {tabStyle}>
                <span style = {tabTextStyle}>{<KeyboardIcon/>}</span>
                <span style = {tabTextStyle}>Blogposts</span>
              </Tab>
              <Tab style = {tabStyle}>
                <span style = {tabTextStyle}>{<AndroidIcon/>}</span>
                <span style = {tabTextStyle}>Projects</span>
              </Tab>
              <Tab style = {tabStyle}>
                <span style = {tabTextStyle}>{<PhoneIcon/>}</span>
                <span style = {tabTextStyle}>Contacts</span>
              </Tab>
            </TabList>
            <TabPanel>
              <Blogs/>
            </TabPanel>
            <TabPanel>
              <em>projects</em>
            </TabPanel>
            <TabPanel>
              <em>Contact details will be here</em>
            </TabPanel>
          </Tabs>
        </Box>
      </Box>
      <Footer/>
    </React.Fragment>
  );
}

export default withTheme(theme)(ProfilePage);
