import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import TrendingSection from './components/TrendingSection'
import useFetch from './hook/useFetch';



const App = () => {
  const trendingMovies = useFetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);
  const trendingTv = useFetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`);


  return (
    <Router>
      <Nav />
      {trendingMovies &&
        <TrendingSection title={"Trending Movies"} info={trendingMovies.results} />
      }

      {trendingTv &&
        <TrendingSection title={"Trending Tv Show"} info={trendingTv.results} />
      }
    </Router>
  );
}

export default App;
