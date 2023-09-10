// CSS import
import "./Home.css";

// Components import
import MovieCard from "../../components/MovieCard/MovieCard";
import useMovieList from "../../hooks/useMovieList";

function Home() {
  // for testing.
  // const movie = {
  // //  " Title": "Harry Potter and the Deathly Hallows: Part 2",
  // //   "Year": "2011",
  // //   "imdbID": "tt1201607",
  // //   "Type": "movie",
  // //   "Poster":"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",

  //   // "Title": "The Avenger",
  //   // "Year": "2012",
  //   // "imdbID": "tt2368537",
  //   // "Type": "movie", "DVD": "11 Oct 2017",
  //   // "Poster": "https://m.media-amazon.com/images/M/MV5BZjBjZDkyZDMtZmFmOS00NTIyLTgwNmEtMGNhZmQ5N2M2NTIyXkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "5.1/10" }], "Metascore": "N/A", "imdbRating": "5.1", "imdbVotes": "366",
  // }
  const { movieList } = useMovieList("harry", "avengers", "batman");

  return (
    <>
      <div className="movie-card-wrapper">
        {movieList.length > 0 &&
          movieList.map((movie) => (
            <MovieCard key={movie.imdbID} id={movie.imdbID} {...movie} />
          ))}
      </div>
    </>
  );
}

export default Home;
