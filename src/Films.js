import React from "react";
import styled from "styled-components";
import Film from "./Film";

const Films = (props) => {
  const { filmNames, film, openFilmTab, setOpenFilmTab } = props;

  return filmNames.map((item) => (
    <Film
      filmName={item}
      film={film}
      openFilmTab={openFilmTab}
      setOpenFilmTab={setOpenFilmTab}
    />
  ));
};

export default Films;
