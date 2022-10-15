import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  onModalCloseBtn = button => {
    if (button.keyCode === 27) {
      this.props.modalToggle();
    }
  };

  onModalCloseClick = () => {
    this.props.modalToggle();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onModalCloseBtn);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onModalCloseBtn);
  }

  render() {
    const image = this.props.imageUrl;
    return (
      <div className="Overlay" onClick={this.onModalCloseClick}>
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
