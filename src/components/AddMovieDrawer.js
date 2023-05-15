import { Box, Button, Stack, Typography } from "@mui/material";

import { gql, useMutation } from "@apollo/client";
import Drawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import * as React from "react";

const CREATE_MOVIE = gql`
  mutation AddNewMovie($name: String!, $genre: String!, $year: String!) {
    addMovie(name: $name, genre: $genre, year: $year) {
      name
      genre
      year
    }
  }
`;

const GET_MOVIES = gql`
  query {
    listMovies {
      name
      genre
      year
    }
  }
`;

export default function AddMovieDrawer({ drawerOpen, handleDrawerToggle }) {
  const submitMovie = (e) => {
    e.preventDefault();
    console.log("form submitMovie", e);
    newMovieData({
      variables: {
        name: movieName,
        genre: movieGenre,
        year: movieYear,
      },
      refetchQueries: [
        {
          query: GET_MOVIES,
        },
      ],
    });
  };
  const [movieName, setMovieName] = React.useState();
  const [movieGenre, setMovieGenre] = React.useState();
  const [movieYear, setMovieYear] = React.useState();
  const [newMovieData, { loading, error }] = useMutation(CREATE_MOVIE);
  if (loading) return "submitting your new movie";
  if (error) return `Submittion error! ${error.message}`;
  return (
    <div>
      <Drawer
        sx={{ width: 450 }}
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          component="form"
          sx={{
            p: 2,
            width: 450,
          }}
          noValidate
          onSubmit={submitMovie}
          autoComplete="off"
        >
          <Typography variant="h6" component="h1" mb={2}>
            Add Movie
          </Typography>

          <Stack spacing={2}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Movie Name"
              variant="filled"
              required
              onChange={(e) => setMovieName(e.target.value)}
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="genre"
              variant="filled"
              required
              onChange={(e) => setMovieGenre(e.target.value)}
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Year"
              variant="filled"
              required
              onChange={(e) => setMovieYear(e.target.value)}
            />
            <FormControl fullWidth>
              <Button type="submit" variant="contained">
                Save
              </Button>
            </FormControl>
          </Stack>
        </Box>
      </Drawer>
    </div>
  );
}
