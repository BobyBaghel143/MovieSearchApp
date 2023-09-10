// CSS import
import "./Navbar.css";

// Component import
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

// Context import
import themeContext from "../../Context/themeContext";

function Navbar() {
  // const resultListRef = userRef(null);
  const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { movieList } = useMovieList(searchTerm);
  const navigator = useNavigate();

  const { theme, setTheme } = useContext(themeContext);

  function handleAutocompleteClick(e, movieImdbId) {
    navigator(`/movie/${movieImdbId}`);
  }

  return (
    <>
      <div className="navbar-wrapper">
        <div className="movie-base-title">
          <Link to="/">Movie World</Link>
        </div>
        <div className="search-bar">
          <input
            id="movie-search-input"
            type=" text"
            onFocus={() => {
              setIsAutoCompleteVisible(true);
            }}
            onBlur={(e) => {
              console.log(e.target);
              setIsAutoCompleteVisible(false);
            }}
            onChange={useDebounce((e) => {
              setSearchTerm(e.target.value);
            })}
            placeholder="Movie seach..."
          />

          {/* // personally for inside nav down list */}
          <div
            id="result-list"
            style={{ display: isAutoCompleteVisible ? "block" : "none" }}
          >
            <div className="autocomplete-result">
              Auto complete results... {searchTerm}
            </div>
            {movieList.length > 0 &&
              movieList.map((movie) => (
                <div
                  onMouseDown={(e) => handleAutocompleteClick(e, movie.imdbID)}
                  key={movie.imdbID}
                  className="autocomplete-result"
                >
                  {movie.Title}
                </div>
              ))}
          </div>
        </div>
        <div onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
          <FontAwesomeIcon
            className="theme-icon"
            icon={theme == "dark" ? faSun : faMoon}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
