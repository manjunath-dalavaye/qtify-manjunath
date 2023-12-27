import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";

function Search({ placeholder }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
        <input className={styles.search} placeholder={placeholder} required />
        <button type="submit" className={styles.searchButton} > 
            <SearchIcon/>
        </button>
    </form>
);
}

export default Search;
