import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import BrandCategories from "./BrandCategories";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { setMovies } from "./features/movie/movieSlice";
import { selectUserName } from "./features/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const getMovies = async () => {
      const collectionRef = collection(db, "movies");
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
      querySnapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          default:
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          trending: trending,
          original: originals,
        })
      );
    };

    getMovies();
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <BrandCategories />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  background: url("/images/home-background.png");
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  background-repeat: no-repeat;
  background-size: cover;

  &:after {
    background: url("/images/home-background.png") center fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
