import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  onModalClose = button => {
    if (button.keyCode === 27) {
      this.props.modalToggle();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onModalClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onModalClose);
  }

  render() {
    const image = this.props.imageUrl;
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={image} alt={image} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  modalToggle: PropTypes.func.isRequired,
};
