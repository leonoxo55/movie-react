import React from "react";
import useFetch from "../hooks/useFetch";
import { url_API, API } from "../utils/constants";

import SliderMovies from "../components/SliderMovies";

export default function Home() {
  const url = `${url_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`;

  const NewMovies = useFetch(url);

  return (
    <>
      <SliderMovies movies={NewMovies} />
    </>
  );
}
