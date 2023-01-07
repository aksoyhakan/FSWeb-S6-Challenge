import React, { useState } from "react";
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
  z-index: 1000;

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

const SCLabel2 = styled.label`
  display: block;
  background: transparent;
  padding: 0.5rem 0rem 1.25rem 1.25rem;
  color: rgb(102, 102, 255);
  font-size: 0.75rem;

  &:hover {
    opacity: 0.5;
  }
`;

const Selection = (props) => {
  const { characterFilter, status, changer } = props;
  const [newCharac, setNewCharac] = useState("");
  console.log(status);
  return (
    <SCSelection>
      {!status ? (
        <SCLabel onClick={() => changer(!status)} for="keyword">
          Select...
        </SCLabel>
      ) : (
        <SCLabel2 onClick={() => changer(!status)} for="keyword">
          Select...
        </SCLabel2>
      )}
      <SCInput
        onChange={(event) => {
          setNewCharac(event.target.value);
          console.log(newCharac);
        }}
        id="keyword"
        type="text"
      />

      {status && (
        <SCInput
          onClick={() => {
            characterFilter(newCharac);
          }}
          type="submit"
        />
      )}
    </SCSelection>
  );
};

export default Selection;
