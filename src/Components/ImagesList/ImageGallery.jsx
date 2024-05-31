import css from "./imagesGallery.module.css";

const ImagesList = ({ images, onImageClick }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li
          key={image.id}
          className={css.li}
          onClick={() => onImageClick(image)}
        >
          <img src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImagesList;
