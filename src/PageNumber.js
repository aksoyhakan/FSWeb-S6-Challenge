import React from "react";
import styled from "styled-components";

const PageNumber = (props) => {
  const { allData, page, setPage, openTab, setOpenTab } = props;
  console.log(allData);
  const no = Math.ceil(allData.length / 10);
  console.log(no);
  const numberArray = [...Array(no).keys()];

  const SCPageNumber = styled.div`
    display: flex;
    justify-content: space-around;
  `;

  const SCNumber = styled.p`
    padding: 0.5rem 1rem;
    border-radius: 10%;
    text-align: center;
    transition: all 0.5s ease-out;
    opacity: 0.5;

    &:hover {
      background: rgb(210, 210, 210);
    }
  `;

  const SCNumber2 = styled.p`
    padding: 0.5rem 1rem;
    border-radius: 10%;
    text-align: center;
    transition: all 0.5s ease-out;
    opacity: 1;

    &:hover {
      background: rgb(210, 210, 210);
    }
  `;

  return (
    <SCPageNumber>
      {page === 1 ? (
        <SCNumber
          onClick={() => {
            page > 1 ? setPage(page - 1) : setPage(1);
            setOpenTab(0);
          }}
        >
          &larr;
        </SCNumber>
      ) : (
        <SCNumber2
          onClick={() => {
            page > 1 ? setPage(page - 1) : setPage(1);
            setOpenTab(0);
          }}
        >
          &larr;
        </SCNumber2>
      )}

      {numberArray.map((item) =>
        page == item + 1 ? (
          <SCNumber
            onClick={(event) => {
              setPage(parseInt(event.target.textContent));
              setOpenTab(0);
            }}
          >
            {item + 1}
          </SCNumber>
        ) : (
          <SCNumber2
            onClick={(event) => {
              setPage(parseInt(event.target.textContent));
              setOpenTab(0);
            }}
          >
            {item + 1}
          </SCNumber2>
        )
      )}
      {page === no ? (
        <SCNumber
          onClick={() => {
            page < no ? setPage(page + 1) : setPage(no);
            setOpenTab(0);
          }}
        >
          &rarr;
        </SCNumber>
      ) : (
        <SCNumber2
          onClick={() => {
            page < no ? setPage(page + 1) : setPage(no);
            setOpenTab(0);
          }}
        >
          &rarr;
        </SCNumber2>
      )}
    </SCPageNumber>
  );
};

export default PageNumber;
