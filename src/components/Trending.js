import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectTrending } from "./features/movie/movieSlice";
import MovieCard from "./MovieCard";

const Trending = () => {
  const trending = useSelector(selectTrending);

  return (
    <Container>
      <h4>Latest & Trending</h4>
      <Content>
        {trending &&
          trending.map((movie, key) => <MovieCard movie={movie} key={key} />)}
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

export default Trending;
