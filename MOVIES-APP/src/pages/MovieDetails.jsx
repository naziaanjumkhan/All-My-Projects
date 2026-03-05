import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=7929aa6e&i=${id}`,
      );
      const data = await response.json();
      setMovie(data);
      console.log(data);
    }
    getMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <div className="movie-detail">
        <h2>{movie.Title}</h2>
        <img alt={movie.Title} src={movie.Poster} />
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Released:</strong> {movie.Released}
        </p>
        <p>
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p>
          <strong>Country:</strong> {movie.Country}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
