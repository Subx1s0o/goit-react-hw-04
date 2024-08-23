import css from "./loadMoreBtn.module.css";

export default function LoadMoreBtn({ page }) {
  return (
    <button
      className={css.btn}
      onClick={() => {
        page();
      }}
    >
      Load More...
    </button>
  );
}
