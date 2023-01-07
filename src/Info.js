import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DetailInfo from "./DetailInfo";

const SCName = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding-right: 1rem;
  padding-left: 0.5rem;
  transition: all 0.5s ease-out;

  &:hover {
    background: rgb(210, 210, 210);
  }
`;

const SCToggle = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const SCInfo = styled.div`
  width: 100%;
  transition: all 0.5s ease-out;
  box-sizing: border-box;
  border-bottom: 0.15rem solid black;
`;

const Info = (props) => {
  const {
    allData,
    page,
    openTab,
    setOpenTab,
    film,
    openFilmTab,
    setOpenFilmTab,
  } = props;

  return allData.map(
    (item, index) =>
      index < page * 10 &&
      index >= (page - 1) * 10 && (
        <SCInfo>
          <SCName>
            <p>{item.name}</p>
            <SCToggle
              id={`${index + 1}-toggle`}
              onClick={(event) => {
                if (parseInt(event.target.id.split("-")[0]) !== openTab) {
                  setOpenTab(parseInt(event.target.id.split("-")[0]));
                  setOpenFilmTab(0);
                } else {
                  setOpenTab(0);
                  setOpenFilmTab(0);
                }
              }}
            >
              {openTab === index + 1 ? "-" : "+"}
            </SCToggle>
          </SCName>
          {openTab === index + 1 && (
            <DetailInfo
              data={item}
              film={film}
              openFilmTab={openFilmTab}
              setOpenFilmTab={setOpenFilmTab}
            />
          )}
        </SCInfo>
      )
  );
};

export default Info;
