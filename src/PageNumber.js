import React from "react";
import styled from "styled-components";

const PageNumber = (props) => {
  const numberArray = [...Array(9).keys()];

  const { page, setPage } = props;

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
        <SCNumber onClick={() => (page > 1 ? setPage(page - 1) : setPage(1))}>
          &larr;
        </SCNumber>
      ) : (
        <SCNumber2 onClick={() => (page > 1 ? setPage(page - 1) : setPage(1))}>
          &larr;
        </SCNumber2>
      )}

      {numberArray.map((item) =>
        page == item + 1 ? (
          <SCNumber onClick={(event) => setPage(event.target.textContent)}>
            {item + 1}
          </SCNumber>
        ) : (
          <SCNumber2 onClick={(event) => setPage(event.target.textContent)}>
            {item + 1}
          </SCNumber2>
        )
      )}
      {page === 9 ? (
        <SCNumber onClick={() => (page < 9 ? setPage(page + 1) : setPage(9))}>
          &rarr;
        </SCNumber>
      ) : (
        <SCNumber2 onClick={() => (page < 9 ? setPage(page + 1) : setPage(9))}>
          &rarr;
        </SCNumber2>
      )}
    </SCPageNumber>
  );
};

export default PageNumber;
