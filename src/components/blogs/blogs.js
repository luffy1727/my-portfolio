import React, {Component} from 'react';
import './blogs.css';
import Modal from './Modal';
import moment from 'moment';
import atoms from '../instapaper/components/atoms';
import './spinner.css'
import Spinner from './Spinner';
import CustomScroll from 'react-custom-scroll';

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
    width: '293px',
    height: '293px'  
};

const galleryItemPictureStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};

const descriptionBarStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '280px',
    maxHeight: '512px',
    height: '512px',
    background: 'white',
}

const imageStyle = {
    objectFit: 'contain',
    maxWidth: '100%',
    maxHeight: '100%'
};

const titleContainerStyle = {
    margin : '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const descriptionContainerStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin : '10px',
}

const textContainerStyle = {
    display: 'flex',
    height: '370px',
}

const titleStyle = {
    margin: '10px',
    marginLeft: '30px',
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
                    return moment.unix(timestamp[key]).format("MMMM d, YYYY").toUpperCase();
                }
            }
        }
    }

    handleText = (text) => {
        if (text != null) {
            if(text.includes("_n")) {
                var newName = text.replace("_n","\n");
                return newName;  
            } else {
                return text;
            }
        }
    }

    stopPropagation = (e) => {
        e.stopPropagation();
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
                    <div style = {imageContainerStyle} onClick={this.stopPropagation}>
                        <img style = {imageStyle} alt="blogDetail" src={this.state.currentBlog.thumbnail}/>
                    </div>
                    <div style = {descriptionBarStyle} onClick={this.stopPropagation}>
                        <div style = {titleContainerStyle}>
                            <Avatar
                                alt="My profile"
                                src="https://luffy1727.github.io/my-portfolio/avatar.png"
                            />
                            <div style = {titleStyle}>
                                <div>
                                    <Typography component="h1" variant="h5" light>
                                        {this.state.currentBlog.title}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <hr style = {hrStyle}/>
                        <div style = {descriptionContainerStyle}>
                            <div style = {textContainerStyle}>
                                <CustomScroll flex="1">
                                    <Typography style={{ padding: '5px'}} component="h1" variant="h6" lightWeight>
                                        {this.handleText(this.state.currentBlog.text)}
                                    </Typography>   
                                </CustomScroll>  
                            </div>

                            <Typography style={{ padding: '5px', fontSize: '0.8rem'}} component="h1" variant="subtitle1" lightWeight>
                                {this.handleTimeStamp(this.state.currentBlog.createdAt)}
                            </Typography>
                        </div>
                    </div>
                </Modal>
            </div>

        );
    }
}

export default Blogs;
