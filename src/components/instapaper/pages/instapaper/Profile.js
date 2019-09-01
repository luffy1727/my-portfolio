import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import atoms from '../../components/atoms';
import molecules from '../../components/molecules';
import Header from '../../components/instapaper/Header';
import Footer from '../../components/instapaper/Footer';
import theme from '../../theme/instapaper/theme';
import withTheme from './withTheme';
import Box from '@material-ui/core/Box';
import Blogs from '../../../.././components/blogs/blogs';
import GridOnOutLinedIcon from '@material-ui/icons/GridOnOutlined';
import AndroidIcon from '@material-ui/icons/Android';
import SettingsIcon from '@material-ui/icons/Settings';

const { Avatar, Typography } = atoms;
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

function ProfilePage() {
  const [tabIndex, setTabIndex] = React.useState(0);
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
                          variant="outlined"
                          style={{
                            backgroundColor: "#3897f0"
                          }}
                          fullWidth={!upSm}>
                    Resume
                  </Button>
                  <div className={classes.settings}>
                    <IconButton>
                      <SettingsIcon/>
                    </IconButton>
                  </div>
                </Grid>
              </Box>
              <Box mb="20px">
                <Grid container spacing={5}>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <b>4</b> posts
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
              <Typography variant="subtitle1" bold>
                Chintushig Ochirsukh
              </Typography>
              <Typography variant="subtitle1">Backend Developer @AndSystems</Typography>
              <Typography variant="subtitle1">Code, Design and everything in between</Typography>
            </Grid>
          </Grid>
        </Box>
        <Tabs
          value={tabIndex}
          centered
          onChange={(event, value) => {
            setTabIndex(value);
          }}
        >
          <Tab label="Posts" icon={<GridOnOutLinedIcon/>} />
          <Tab label="Coming Soon" icon={<AndroidIcon/>} />
        </Tabs>
        <Blogs/>
      </Box>
      <Footer/>
    </React.Fragment>
  );
}

export default withTheme(theme)(ProfilePage);
