import React, {Component} from 'react';
import './blogs.css';
import Modal from './Modal';

const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(17rem, 1fr))',
    // gridTemplateRows: '50px calc(100vh - 100px) 50px' 
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
    maxWidth: '240px',
    maxHeight: '512px',
    height: '512px',
    background: 'white',
}

const imageStyle = {
    objectFit: 'contain',
    maxWidth: '100%',
    maxHeight: '100%'
};

const titleStyle = {
    margin : '5px'
};

const imageContainerStyle = {
    background: 'black',
    width: '512px',
    height: '512px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'    
};

class Blogs extends Component {
    constructor() {
        super();
        this.state = {
            openDialog: false,
            blogs: [],
            currentBlog: ''
        };
        // this.handleOpenDialog = this.handleOpenDialog.bind(this);
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

    componentDidMount() {
        fetch('https://us-central1-luffy-portfolio.cloudfunctions.net/api/blogs')
            .then(res => res.json())
            .then(blogs => this.setState({blogs}));
    }

    render() {
        return (
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
                        <div style = {titleStyle}>
                            {this.state.currentBlog.title}
                        </div>
                        <div>
                            {this.state.currentBlog.text}
                        </div>
                    </div>
                </Modal>
            </div>

        );
    }
}

export default Blogs;