import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  HomeContainer,
  Heading,
  AllMovieList,
  MovieCard,
  MovieName,
  MovieDesc,
  Genres,
  GenreContainer,
} from "./style";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const API_URL = "http://localhost:3000/movies";
  const [data, setData] = useState([]);
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("data", data);

  const handleCardClick = (param) => {
    navigate(`${param?.id}`);
  };

  const filteredGenre = data?.filter((obj) =>
    obj.genre.some((val) => val === genre)
  );

  useEffect(() => {
    setData(filteredGenre);
  }, [genre]);

  console.log("genre", genre);

  return (
    <HomeContainer>
      <Heading>All Movies...</Heading>
      <GenreContainer>
        <Genres onClick={() => setGenre("Action")}>Action</Genres>
        <Genres onClick={() => setGenre("Crime")}>Crime</Genres>
        <Genres onClick={() => setGenre("Drama")}>Drama</Genres>
        <Genres onClick={() => setGenre("Sci-Fi")}>Sci-Fi</Genres>
        <Genres onClick={() => setGenre("Adventure")}>Adventure</Genres>
        <Genres onClick={() => window.location.reload()}>
          Clear All Filters
        </Genres>
      </GenreContainer>
      <AllMovieList>
        {data.map((item, key) => (
          <MovieCard onClick={() => handleCardClick(item)}>
            {console.log("item", item)}
            {
              <img
                src={
                  "https://m.media-amazon.com/images/M/MV5BMjAyMjUyNzg1Ml5BMl5BanBnXkFtZTgwNzAwMzg5MTE@._V1_.jpg"
                }
              />
            }
            <MovieName> {item?.movie_name} </MovieName>
            <MovieDesc> {item?.description} </MovieDesc>
          </MovieCard>
        ))}
      </AllMovieList>
    </HomeContainer>
  );
};

export default HomePage;
