import React from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-dom";

import "./MovieCatalog.scss";
import Movie from "../../pages/movie";

export default function MovieCatalog(props) {
  const {
    movies: { results }
  } = props;

  return results.map(result => (
    <Col key={result.id} xs={4} className="movie-catalog">
      <MovieCard movie={result} />
    </Col>
  ));
}

function MovieCard(props) {
  const { movie } = props;

  return "movie Card";
}
