import React from "react";
import styled from "styled-components";

const FilmDetail = (props) => {
  const { data } = props;

  return (
    <div>
      <p>{data.opening_crawl}</p>
      <p>Directed by: {data.director}</p>
      <p>Produced by: {data.producer}</p>
      <p>Released Date: {data.release_date}</p>
    </div>
  );
};

export default FilmDetail;
