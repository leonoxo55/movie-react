import React from "react";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";

import "./SliderMovies.scss";

export default function sliderMovies(props) {
  const { movies } = props;

  if (movies.loading || !movies.result) {
    return "Loading...";
  }

  const { results } = movies.result;

  return (
    <Carousel autoplay classNanme="slider-movies">
      {results.map(movie => (
        <Movies key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
}

function Movies(props) {
  const {
    movie: { id, backdrop_path, title, overview }
  } = props;
  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  console.log(backdropPath);
  console.log(props);

  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button type="primary">Ver más</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
