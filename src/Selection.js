import React from "react";
import styled from "styled-components";

const SCSelection = styled.div`
  width: 100%;
  background: rgb(210, 210, 210);
  border-radius: 0.5rem 0.5rem 0 0;
  border-bottom: 0.15rem solid rgb(190, 190, 190);
  transition: all 0.5s ease-out;

  &:hover {
    background: rgb(180, 180, 180);
    border-bottom: 0.15rem solid black;
  }
`;

const SCInput = styled.input`
  display: block;
  background: transparent;
  border: none;
  width: 100%;

  &: active {
    border: none;
  }
`;

const SCLabel = styled.label`
  display: block;
  background: transparent;
  padding: 1.25rem 0rem 0rem 1.25rem;
  color: rgb(120, 120, 120);
  font-size: 1.25rem;

  &:hover {
    opacity: 0.5;
  }
`;

const Selection = (props) => {
  const { characterFilter } = props;
  return (
    <SCSelection>
      <SCLabel for="keyword">Select...</SCLabel>
      <SCInput
        onChange={(event) => {
          characterFilter(event.target.value);
          console.log(event.target.value);
        }}
        id="keyword"
        type="text"
      />
    </SCSelection>
  );
};

export default Selection;
