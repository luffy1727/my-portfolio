import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.open) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      padding: 50,
      height : '100%',
    };

    // The modal "window"
    const modalStyle = {
        // centralizing part
        justifyContent: 'center',
        alignItems: 'center',
        // scrolling part
        height: '90%',
        marginTop: '100px',
        marginBottom: '100px',
        display: 'flex',
        flexDirection: 'row',
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle} onClick={this.props.onCancel} >
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  open: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;