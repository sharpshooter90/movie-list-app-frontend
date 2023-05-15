import { gql, useQuery } from "@apollo/client";
import { Stack } from "@mui/material";
import React from "react";
import MovieCard from "../components/MovieCard";

const GET_MOVIES = gql`
  query {
    listMovies {
      name
      genre
      year
    }
  }
`;

const Movies = (movies) => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log("Movies", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <h1>Movies</h1>
      <Stack direction="row" spacing={2}>
        {data?.listMovies.map((movie, index) => {
          return (
            <MovieCard
              key={index + "_" + movie.name}
              movieName={movie.name}
              genre={movie.genre}
              year={movie.year}
              coverImageURL={movie.coverImageURL}
            />
          );
        })}
      </Stack>
    </div>
  );
};

export default Movies;
