import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import TrendingSection from './components/TrendingSection';
import useFetch from './hook/useFetch';
import Movies from './components/Movies';
import Tv from './components/Tv';
import Home from './components/Home'
import CardSection from './components/CardSection';




const App = (info) => {


  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/movies" component={Movies}></Route>
        <Route exact path="/tv" component={Tv}></Route>
      </Switch>



    </Router>
  );
}

export default App;
