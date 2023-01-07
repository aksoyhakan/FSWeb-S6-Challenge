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
    margin: 1rem auto;
    padding: 1rem;
  `;

  const SCHeading = styled.h1`
    text-align: center;
    font-size: 2rem;
  `;

  const [allData, setallData] = useState(firstData);
  const [data, setData] = useState([]);
  const [openTab, setOpenTab] = useState(0);
  const [page, setPage] = useState(1);
  const [film, setFilm] = useState([]);
  const [openFilmTab, setOpenFilmTab] = useState(0);
  const [search, setSearch] = useState(false);
  const [reset, setReset] = useState(false);

  let dataArray = [];
  let dataArray2 = [];

  useEffect(() => {
    for (let i = 1; i <= 9; i++) {
      axios
        .get(`https://swapi.dev/api/people/?page=${i}`)
        .then((response) => {
          dataArray2 = dataArray2.concat(response.data.results);
          setData(dataArray2);

          console.log(`https://swapi.dev/api/people/?page=${i}`);
          console.log(response);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/films/`)
      .then((response) => {
        console.log(`https://swapi.dev/api/films/`);
        console.log(response);
        setFilm(response.data.results);
        console.log(film);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    for (let i = 1; i <= 9; i++) {
      axios
        .get(`https://swapi.dev/api/people/?page=${i}`)
        .then((response) => {
          dataArray = dataArray.concat(response.data.results);
          setallData(dataArray);

          console.log(`https://swapi.dev/api/people/?page=${i}`);
          console.log(response);
          console.log(allData);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  console.log(dataArray);
  function characterFilter(keyword) {
    if (keyword === "") {
      setallData(data);
      setPage(1);
      setOpenTab(0);
    } else {
      let filterArray = [];
      let newName = "";
      filterArray = allData.filter((item) => {
        newName = item.name.toUpperCase();
        if (newName.includes(keyword.toUpperCase())) {
          return item;
        }
      });
      setallData(filterArray);
    }
  }

  return (
    <SCApp className="App">
      <Selection
        characterFilter={characterFilter}
        status={search}
        changer={setSearch}
        home={reset}
        setHome={setReset}
        pageSet={setPage}
      />
      <SCHeading className="Header">Star Wars Major Characters List</SCHeading>
      <Info
        allData={allData}
        openTab={openTab}
        setOpenTab={setOpenTab}
        film={film}
        openFilmTab={openFilmTab}
        setOpenFilmTab={setOpenFilmTab}
        page={page}
      />
      <PageNumber
        page={page}
        setPage={setPage}
        openTab={openTab}
        setOpenTab={setOpenTab}
        allData={allData}
      />
    </SCApp>
  );
};

export default App;
