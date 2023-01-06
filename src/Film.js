import React from "react";
import styled from "styled-components";
import axios from "axios";
import FilmDetail from "./FilmDetail";

const SCFilm = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid black;
  margin-top: 0rem;
`;

const SCFilmName = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
  padding-left: 0.25rem;
  margin-top: 0rem;
  transition: all 0.5s ease-out;

  &:hover {
    background: rgb(210, 210, 210);
  }
`;

const Film = (props) => {
  const { filmName, film, openFilmTab, setOpenFilmTab } = props;
  console.log(filmName);
  console.log(film);
  return film.map(
    (item) =>
      item.title === filmName && (
        <SCFilm>
          <SCFilmName>
            <p>
              Episode {item.episode_id}: {item.title}
            </p>
            <p
              onClick={(event) => {
                openFilmTab !== item.episode_id
                  ? setOpenFilmTab(item.episode_id)
                  : setOpenFilmTab(0);
              }}
            >
              {openFilmTab === item.episode_id ? "-" : "+"}
            </p>
          </SCFilmName>
          {openFilmTab === item.episode_id && (
            <FilmDetail data={item}></FilmDetail>
          )}
        </SCFilm>
      )
  );
};

export default Film;
