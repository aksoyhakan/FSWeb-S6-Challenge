import React, { useEffect, useState } from "react";
import firstData from "./FirstData";
import Info from "./Info";
import styled from "styled-components";
import PageNumber from "./PageNumber";
import axios from "axios";
import Selection from "./Selection";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const SCApp = styled.div`
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
  `;

  const SCHeading = styled.h1`
    text-align: center;
    font-size: 2rem;
  `;

  const [allData, setallData] = useState([]);
  const [data, setData] = useState(firstData);
  const [openTab, setOpenTab] = useState(0);
  const [page, setPage] = useState(1);
  const [film, setFilm] = useState([]);
  const [openFilmTab, setOpenFilmTab] = useState(0);

  let dataArray = [];

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then((response) => {
        console.log(`https://swapi.dev/api/people/?page=${page}`);
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, [page]);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/films/`)
      .then((response) => {
        setFilm(response.data[0].results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    for (let i = 1; i <= 9; i++) {
      axios
        .get(`https://swapi.dev/api/people/?page=${i}`)
        .then((response) => {
          dataArray = dataArray.concat(response.data);
          setallData(dataArray);
          console.log(response.data);
          console.log(allData);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  function characterFilter(keyword) {
    let filterArray = [];
    filterArray = allData.filter((item) => item.name.includes(keyword));
    setData(filterArray);
  }

  return (
    <SCApp className="App">
      <Selection characterFilter={characterFilter} />
      <SCHeading className="Header">Star Wars Major Characters List</SCHeading>
      <Info
        data={data}
        openTab={openTab}
        setOpenTab={setOpenTab}
        film={film}
        openFilmTab={openFilmTab}
        setOpenFilmTab={setOpenFilmTab}
      />
      <PageNumber page={page} setPage={setPage} />
    </SCApp>
  );
};

export default App;
