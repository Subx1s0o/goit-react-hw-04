import css from "./imagesList.module.css";
import Image from "../Image/Image";

export default function ImagesList({ images }) {
  return (
    <ul className={css.list}>
      {images.map(({ id, alt_description, urls }) => {
        return (
          <Image
            key={id}
            description={alt_description}
            cardImage={urls.small}
            modalImage={urls.regular}
          />
        );
      })}
    </ul>
  );
}
