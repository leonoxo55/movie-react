import React from "react";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=d229a6095672f117ec1f7246b639291b&language=es-ES&page=1";

  const movies = useFetch(url);

  console.log(movies);
  return "Estamos en Home";
}
