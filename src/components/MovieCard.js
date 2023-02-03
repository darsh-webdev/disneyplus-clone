import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Wrap>
      {movie.id}
      <Link to={"/details/" + movie.id}>
        <img src={movie.cardImg} alt={movie.title}></img>
      </Link>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding-top: 50%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: fill !important;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default MovieCard;
