import './App.css';
import api from './api/axiosConfig'
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Review from './components/review/Review';
import NotFound from './components/notFound/NotFound';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {


      const response = await api.get("api/v1/movies")
      setMovies(response.data);


    } catch (err) {

      console.log(err);

    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`)
      const singleMovie = response.data
      setMovie(singleMovie)
      setMovies(singleMovie.setReviews)

    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />} />
          <Route path='/Trailer/:ytTrailerId' element={<Trailer />} />
          <Route path='/Reviews/:movieId' element={<Review getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>



    </div>
  );
}

export default App;
