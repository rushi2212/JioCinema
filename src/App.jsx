import Header from "./components/Header/Header";
import Tags from "./components/Tags/Tags";
import Channels from "./components/Channels/Channels";
import Carousel from "./components/Carousel/Carousel";
import Featured from "./components/Featured/Featured";
import Shows from "./components/Shows/Shows";
import { useState, useEffect } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [hindiMovies, setHindiMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        let moviesResponse = await fetch(
          "https://jiocinema-qrlr.onrender.com/movies"
        );
        let movies = await moviesResponse.json(); // Await JSON parsing
        setMovies(movies);

        let featMovies = movies.filter((movie) => movie.featured === true);
        setFeaturedMovies(featMovies.slice(0, 4));

        let draMovies = movies.filter((movie) => movie.genre.includes("Drama"));
        setDramaMovies(draMovies.slice(0, 6));

        let hinMovies = movies.filter((movie) => movie.language === "Hindi");
        setHindiMovies(hinMovies.slice(0, 6));

        let topRatedMovies = movies.filter((movie) => movie.imdb >= 8.5);
        setTopMovies(topRatedMovies.slice(0, 6));
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);
  return (
    <>
      <Header movies={movies} />
      <Tags />
      <Carousel />
      <Channels />
      <Featured movies={featuredMovies} />
      <Shows title="Drama Movies" movies={dramaMovies} />
      <Shows title="Hindi Movies" movies={hindiMovies} />
      <Shows title="Highly Rated Movies" movies={topMovies} />
    </>
  );
};

export default App;
