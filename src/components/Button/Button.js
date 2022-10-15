import PropTypes from 'prop-types';

const ButtonAddMore = ({ onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      Add more images
    </button>
  );
};

export default ButtonAddMore;

ButtonAddMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
