import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ imageUrl, modalToggle }) => {
  const onModalCloseBtn = button => {
    if (button.keyCode === 27) {
      modalToggle();
    }
  };

  const onModalCloseClick = () => {
    modalToggle();
  };

  useEffect(() => {
    window.addEventListener('keydown', onModalCloseBtn);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', onModalCloseBtn);
    };
  }, []);

  return (
    <div className="Overlay" onClick={onModalCloseClick}>
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
