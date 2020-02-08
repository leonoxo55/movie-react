import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { url_API, API } from "../utils/constants";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import MovieCatalog from "../components/MovieCatalog";

export default function NewMovies() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${url_API}/movie/now_playing?api_key=${API}&lenguage=es-ES&page=${page}`
      );

      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  console.log(movieList);

  return (
    <Row>
      <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
          Ultimos Lanzamientos
        </h1>
      </Col>
      {movieList.results ? (
        <Col span="24">
          <MovieCatalog movies={movieList} />
        </Col>
      ) : (
        <Col span="24">
          <Loading />
        </Col>
      )}

      <Col span="24">
        <Footer />
      </Col>
    </Row>
  );
}
