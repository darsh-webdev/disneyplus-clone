import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectNewDisney } from "./features/movie/movieSlice";
import MovieCard from "./MovieCard";

const NewDisney = () => {
  const newToDisney = useSelector(selectNewDisney);
  return (
    <Container>
      <h4>New to Disney+</h4>
      <Content>
        {newToDisney &&
          newToDisney.map((movie, key) => (
            <MovieCard movie={movie} key={key} />
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;

  @media (max-width: 768px) {
    h4 {
      font-size: 1rem;
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export default NewDisney;
