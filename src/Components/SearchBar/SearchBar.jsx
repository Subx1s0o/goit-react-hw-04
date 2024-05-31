import css from "./searchBar.module.css";
import toast from "react-hot-toast";
export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.elements.search.value;

    if (form.elements.search.value.trim() === "") {
      toast.error("We can't find something with empty value of search");
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
