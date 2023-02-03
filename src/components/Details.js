import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import styled from "styled-components";

const Details = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      const userDocRef = doc(db, "movies", id);

      const movieSnapshot = await getDoc(userDocRef);

      if (movieSnapshot.exists()) {
        setDetailData(movieSnapshot.data());
      } else {
        console.log("movie not found");
      }
    };
    getDetails();
  }, [id]);

  const { titleImg, backgroundImg, subTitle, description, title } = detailData;

  return (
    <Container>
      <Background>
        <img alt={title} src={backgroundImg} />
      </Background>
      <ImageTitle>
        <img alt={title} src={titleImg} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="play button icon" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="trailer button icon" />
            <span>Trailer</span>
          </Trailer>
          <AddToList>
            <span></span>
            <span></span>
          </AddToList>
          <GroupWatch>
            <img src="/images/group-icon.png" alt="group watch button icon" />
          </GroupWatch>
        </Controls>
        <SubTitle>{subTitle}</SubTitle>
        <Description>{description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.6;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: fill;
    @media (max-width: 768px) {
      object-fit: cover;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-start;
  -webkit-box-pack: start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 1rem;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 0.9rem;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const AddToList = styled.div`
  margin-right: 16px;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  border: 2px solid rgb(249, 249, 249);
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:last-child {
      height: 16px;
      transform: translate(-8px, 0px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled(AddToList)`
  background-color: rgba(0, 0, 0, 0.9);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 1rem;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 1.2rem;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default Details;
