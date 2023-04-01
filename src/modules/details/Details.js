import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  DetailsContainer,
  DetailsBox,
  MovieName,
  MovieDesc,
  MovieRating,
  OtherDetails,
} from "./style";

const Details = () => {
  const { id } = useParams();

  const API_URL = `http://localhost:3000/movies?id=${id}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(" details", data);

  return (
    <DetailsContainer>
      <img
        src={
          "https://m.media-amazon.com/images/M/MV5BMjAyMjUyNzg1Ml5BMl5BanBnXkFtZTgwNzAwMzg5MTE@._V1_.jpg"
        }
      />
      <DetailsBox>
        <MovieName>{data?.movie_name}</MovieName>
        <MovieRating>
          imdb {data?.ratings} &nbsp; {data?.runtime} min
        </MovieRating>
        <MovieDesc>{data?.description}</MovieDesc>
      </DetailsBox>

      <OtherDetails>
        <MovieDesc>Casting : &nbsp;{data?.cast}</MovieDesc>
        <MovieDesc>Directed By : &nbsp;{data?.director}</MovieDesc>
        <MovieDesc>Producers : &nbsp;{data?.producer}</MovieDesc>
        <MovieDesc>Released On : &nbsp;{data?.release_date}</MovieDesc>
      </OtherDetails>
    </DetailsContainer>
  );
};

export default Details;
