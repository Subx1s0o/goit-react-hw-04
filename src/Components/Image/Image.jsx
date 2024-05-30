import css from "../ImagesList/imagesList.module.css";

export default function Image({ id, cardImage, description }) {
  return (
    <li className={css.li} key={id}>
      <img src={cardImage} alt={description} />
    </li>
  );
}
