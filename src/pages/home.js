import React from "react";
import { Row, Col } from "antd";
import useFetch from "../hooks/useFetch";
import { url_API, API } from "../utils/constants";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

import SliderMovies from "../components/SliderMovies";

export default function Home() {
  const NewMovies = useFetch(
    `${url_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );

  const popularMovies = useFetch(
    `${url_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
  );

  const topRatedMovies = useFetch(
    `${url_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`
  );

  return (
    <>
      <SliderMovies movies={NewMovies} />
      <Row>
        <Col span={12}>
          <MovieList movies={popularMovies} title="Peliculas Populares" />
        </Col>
        <Col span={12}>
          <MovieList
            movies={topRatedMovies}
            title="Top Mejores Peliculas Puntuadas"
          />
        </Col>
      </Row>
      <Footer />
    </>
  );
}
