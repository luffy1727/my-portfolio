import React, {Component} from 'react';
import './blogs.css';
import Modal from "@material-ui/core/Modal";

const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(17rem, 1fr))',
    gridGap: '1rem',
    width: 'auto',
    margin: '0',
    flexWrap: 'wrap',
    paddingBottom: '3rem'
};

const galleryItemStyle = {
    position: 'relative',
    flex: '1 0 22rem',
    margin: '1rem',
    color: '#fff',
    cursor: 'pointer'
};

const galleryItemPictureStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
};

const modalStyle = {
    width: '30%',
    height: '70%',
    top: '50%',
    left: '50$',
    position: 'relative'
};

const modalContainerStyle = {
    alignItems: 'center',
    justifyContent: 'center'
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
        console.log('blog',blog);
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
            .then(blogs => this.setState({blogs}, () => console.log('Blogs fetched ', blogs)));
    }

    render() {
        return (
            <div style = {{...modalStyle, ...galleryStyle, ...modalContainerStyle }}>
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
                    <img alt="blogDetail" style = {modalStyle} src={this.state.currentBlog.thumbnail }
                    />
                </Modal>
            </div>

        );
    }
}

export default Blogs;
