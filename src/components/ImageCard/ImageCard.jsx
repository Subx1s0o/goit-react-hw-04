import css from "./ImageCard.module.css";

export default function ImageCard({ image, onImageClick }) {
  return (
    <li className={css.li} onClick={() => onImageClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </li>
  );
}
