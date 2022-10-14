import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imagesArr, toggleModal }) => {
  return (
    <ul className="ImageGallery">
      {imagesArr.map(elem => (
        <ImageGalleryItem
          imageInfo={elem}
          key={elem.id}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imageArr: PropTypes.arrayOf(PropTypes.shape.isRequired),
  toggleModal: PropTypes.func.isRequired,
};
export default ImageGallery;
