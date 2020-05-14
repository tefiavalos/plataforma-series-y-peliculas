import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import CardSection from './components/CardSection'
import useFetch from './hook/useFetch';



const App = () => {
  const trendingMovies = useFetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);
console.log(process.env.REACT_APP_API_KEY)
  console.log(trendingMovies)
  return (
    <Router>
        <Nav/>
        {trendingMovies &&
          <CardSection title="Trending Movies" info={trendingMovies.results}/>
        }
    </Router>
  );
}

export default App;
