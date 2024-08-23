import ImageCard from "../ImageCard/ImageCard";
import css from "./imagesGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onImageClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
