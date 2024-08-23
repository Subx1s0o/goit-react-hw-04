import css from "./errorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.main}>
      <div className={css.error}>Sorry, we don`t find images</div>
    </div>
  );
}
