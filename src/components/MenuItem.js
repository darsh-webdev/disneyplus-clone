import React from "react";
import styled from "styled-components";

const MenuItem = ({ title, icon, link }) => {
  return (
    <Item href={link}>
      <img src={`/images/${icon}`} alt={title}></img>
      <span>{title}</span>
    </Item>
  );
};

const Item = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;

  img {
    height: 22px;
    min-width: 22px;
    width: 22px;
    margin-right: 2px;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 0.8rem;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0;
    white-space: nowrap;
    margin-top: 3px;
    position: relative;

    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }

  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;

export default MenuItem;
