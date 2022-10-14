import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageInfo, toggleModal }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={imageInfo.previewURL}
        alt={imageInfo.tags}
        className="ImageGalleryItem-image"
        onClick={() => toggleModal(imageInfo.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  imageInfo: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
