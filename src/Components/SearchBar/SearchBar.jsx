import css from "./searchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.elements.search.value;

    if (form.elements.search.value.trim() === "") {
      console.error("empty input");
    } else {
      onSearch(search);
    }

    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
