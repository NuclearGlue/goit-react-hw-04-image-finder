import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ imageUrl, modalToggle }) => {
  const onModalCloseBtn = button => {
    if (button.keyCode === 27) {
      modalToggle();
    }
  };

  const onModalCloseClick = event => {
    if (event.target.classList.contains('Overlay')) {
      modalToggle();
    } else {
      return;
    }
  };

  useEffect(() => {
    const onModalCloseBtn = button => {
      if (button.keyCode === 27) {
        modalToggle();
      }
    };

    if (modalToggle) {
      window.addEventListener('keydown', onModalCloseBtn);
    } else {
      window.removeEventListener('keydown', onModalCloseBtn);
    }
  }, [modalToggle]);

  return (
    <div className="Overlay" onClick={event => onModalCloseClick(event)}>
      <div className="Modal">
        <img src={imageUrl} alt={imageUrl} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  modalToggle: PropTypes.func.isRequired,
};

export default Modal;
