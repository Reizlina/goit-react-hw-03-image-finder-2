import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery = props => {
  const { pictures, onClick } = props;

  const galleryItems = pictures.map(
    ({ id, webformatURL, tags, largeImageURL }) => {
      return (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      );
    }
  );

  return <ul className={s.list}>{galleryItems}</ul>;
};

export default ImageGallery;

ImageGallery.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object),
};
