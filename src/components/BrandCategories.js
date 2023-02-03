import React from "react";
import styled from "styled-components";
import BrandCategory from "./BrandCategory";
import { brandCategories } from "./brandCategoriesList";

const BrandCategories = () => {
  return (
    <Container>
      {brandCategories.map((category, key) => (
        <BrandCategory category={category} key={key} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    place-items: center;
  }
`;

export default BrandCategories;
