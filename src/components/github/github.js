import React, {Component} from 'react';
import '../blogs/spinner.css'
import Spinner from '../blogs/Spinner';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import atoms from '../instapaper/components/atoms';

const { Typography } = atoms;

const spinnerContainerStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: '25px'
}

class Github extends Component {
    constructor() {
        super();
        this.state = {
            github: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('https://us-central1-luffy-portfolio.cloudfunctions.net/api/github')
        .then(res => res.json())
        .then(github => this.setState({github, isLoading: false}));
    }

    render() {
        return (
            this.state.isLoading ?
            <div style = {spinnerContainerStyle}>
                <Spinner/>
            </div>
                      :
            <Box mb="5px">
                {this.state.github.map((github, i) =>
                    <Grid container spacing={3} key = {i}>
                        <Grid item key = 'repos'>
                            <Typography variant="subtitle1" key = {i}>
                                <b>{github.repositories}</b> repositories
                            </Typography>
                        </Grid>
                        <Grid item key = 'followers'>
                            <Typography variant="subtitle1" key = {i}>
                                <b>{github.followers}</b> followers
                            </Typography>
                        </Grid>
                        <Grid item key = 'following'>
                            <Typography variant="subtitle1" key = {i}>
                                <b>{github.following}</b> following
                            </Typography>
                        </Grid>
                    </Grid>
                )}
            </Box>
        );
    }
}

export default Github;