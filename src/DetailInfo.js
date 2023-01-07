import React from "react";
import styled from "styled-components";
import Films from "./Films";

const DetailInfo = (props) => {
  const { data, film, openFilmTab, setOpenFilmTab } = props;
  const SCDetailInfo = styled.div`
    text-align: left;
    box-sizing: border-box;
    transition: all 0.5s ease-out;
  `;

  const SCFilm = styled.p`
    font-weight: bold;
    text-decoration: underline;
  `;

  return (
    <SCDetailInfo>
      <p>mass: {data.mass}</p>
      <p>height: {data.height}</p>
      <p>skin color: {data.skin_color}</p>
      <p>birth year: {data.birth_year}</p>
      <p>eye color: {data.eye_color}</p>
      <p>gender: {data.gender}</p>
      <p>hair color: {data.hair_color}</p>
      <SCFilm>Appears in {data.films.length} films</SCFilm>
      <Films
        filmNames={data.films}
        film={film}
        openFilmTab={openFilmTab}
        setOpenFilmTab={setOpenFilmTab}
      />
    </SCDetailInfo>
  );
};

export default DetailInfo;
