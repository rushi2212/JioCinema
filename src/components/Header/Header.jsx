import styles from "./header.module.css";
import JClogo from "../../assets/jc_logo_v2.svg";
import crown from "../../assets/crown.svg";
import SearchIcon from "../../assets/ic_search.svg";
import VoiceSearchIcon from "../../assets/voice-search.svg";
import JioIcon from "../../assets/jio-logo.png";
import { useEffect, useState } from "react";
import Show from "../Show/Show";

const Header = (props) => {
  let navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"];
  const [searchTitle, setSearchTitle] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (searchTitle !== "") {
      let filterMovies = props.movies.filter((movie) => {
        return movie.name.toUpperCase().includes(searchTitle.toUpperCase());
      });
      setFilteredMovies(filterMovies);
    } else {
      setFilteredMovies([]);
    }
  }, [searchTitle]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <div className={styles.logo}>
            <img src={JClogo} alt="logo" />
            <div className={styles.premium}>
              <img src={crown} alt="" />
              <p>Go Premium</p>
            </div>
          </div>
          <ul className={styles.navLinks}>
            {navLinks.map((links, id) => {
              return (
                <li className={styles.navLink} key={id}>
                  {links}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.search}>
          <div className={styles.searchbox}>
            <div className={styles.headerIcon}>
              <img src={SearchIcon} alt="" />
            </div>
            <input
              type="text"
              onChange={(e) => {
                setSearchTitle(e.target.value);
              }}
              className={styles.searchInput}
              placeholder="Movies, Shows and more"
            />
            <div className={`${styles.headerIcon} voice`}>
              <img src={VoiceSearchIcon} alt="" />
            </div>
          </div>
          <img className={styles.usericon} src={JioIcon} alt="" />
        </div>
      </header>
      {filteredMovies.length !== 0 ? (
        <div className={styles.searchResult}>
          {filteredMovies.map((movie, id) => {
            return <Show movie={movie} key={id}></Show>;
          })}
        </div>
      ) : null}
    </>
  );
};

export default Header;
