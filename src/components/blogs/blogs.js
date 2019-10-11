import React, {Component} from 'react';
import './blogs.css';
import Modal from './Modal';
import moment from 'moment';
import atoms from '../instapaper/components/atoms';
import './spinner.css'
import Spinner from './Spinner';

const { Avatar, Typography } = atoms;

const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(17rem, 1fr))',
    gridGap: '1rem',
    margin: '0',
    width: 'auto',
    flexWrap: 'wrap',
};

const galleryItemStyle = {
    position: 'relative',
    minHeight: '40%',
    minWidth: '40%',
    maxWidth: 'auto',
    maxHeight: 'auto',
    width: '100%',
    height: '100%'  
};

const galleryItemPictureStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};

const descriptionBarStyle = {
    maxWidth: '280px',
    maxHeight: '512px',
    height: '512px',
    background: 'white',
    overflow: 'scroll',
}

const imageStyle = {
    objectFit: 'contain',
    maxWidth: '100%',
    maxHeight: '100%'
};

const titleContainerStyle = {
    margin : '10px',
    display: 'flex',
    flexDirection: 'row'
};

const textContainerStyle = {
    margin : '10px',
}

const titleStyle = {
    margin : '10px',
    display: 'flex',
    flexDirection: 'column'
};

const hrStyle = {
    width: '95%',
    height: '0.8px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#666',
    border: '0 none'
};

const imageContainerStyle = {
    background: 'black',
    width: '512px',
    height: '512px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'    
};

const spinnerContainerStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: '25px'
}

class Blogs extends Component {
    constructor() {
        super();
        this.state = {
            openDialog: false,
            blogs: [],
            currentBlog: '',
            isLoading: true,
        };
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
    handleOpenDialog = (blog) => {
        this.setState({
            openDialog: true,
            currentBlog: blog
        });
    };
    handleCloseDialog() {
        this.setState({
            openDialog: false
        });
    }

    handleTimeStamp = (timestamp) => {
        if (timestamp != null) {
            for(var key in timestamp) {
                if(key === '_seconds') {
                    return moment.unix(timestamp[key]).format("DD-MM-YYYY HH:mm:ss");
                }
            }
        }
    }

    componentDidMount() {
        fetch('https://us-central1-luffy-portfolio.cloudfunctions.net/api/blogs')
            .then(res => res.json())
            .then(blogs => this.setState({blogs, isLoading: false}));        }    
    render() {
        return (
            this.state.isLoading ?
            <div style = {spinnerContainerStyle}>
                <Spinner/>
            </div>
                      :
            <div style = {galleryStyle}>
                {this.state.blogs.map((blog, i) =>
                    <div style = {galleryItemStyle} key = {i} tabIndex="0">
                        <img alt="post" src={blog.thumbnail}
                             style = {galleryItemPictureStyle}
                             onClick={()=>{
                                 this.handleOpenDialog(blog)
                             }}
                        />
                    </div>
                )}
                <Modal open={this.state.openDialog} onCancel={this.handleCloseDialog}>
                    <div style = {imageContainerStyle}>
                        <img style = {imageStyle} alt="blogDetail" src={this.state.currentBlog.thumbnail}/>
                    </div>
                    <div style = {descriptionBarStyle}>
                        <div style = {titleContainerStyle}>
                            <Avatar
                                style={{ margin: 'auto' }}
                                alt="My profile"
                                src={require('../instapaper/pages/instapaper/avatar.png')}
                            />
                            <div style = {titleStyle}>
                                <div>
                                    <Typography component="h1" variant="h5" light>
                                        {this.state.currentBlog.title}
                                    </Typography>
                                </div>
                                <strong>
                                    {this.handleTimeStamp(this.state.currentBlog.createdAt)}
                                </strong>
                            </div>
                        </div>
                        <hr style = {hrStyle}/>
                        <div style ={textContainerStyle}>
                            <Typography component="h1" variant="h6" lightWeight>
                                {this.state.currentBlog.text}
                            </Typography>
                        </div>
                    </div>
                </Modal>
            </div>

        );
    }
}

export default Blogs;