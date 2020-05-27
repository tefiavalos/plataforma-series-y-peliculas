import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import TrendingSection from './components/TrendingSection';
import useFetch from './hooks/useFetch';
import Movies from './components/Movies';
import Tv from './components/Tv';
import Home from './components/Home'
import CardSection from './components/CardSection';
import All from './components/All';
import Details from './components/Details';
import Videos from './components/Videos';
import Overview from './components/Overview';
import SearchSection from './components/SearchSection';
import './App.css';



const App = () => {


  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/movie" component={Movies}></Route>
        <Route exact path="/tv" component={Tv}></Route>
        <Route exact path="/:media/category/:categoria" component={All}></Route>
        <Route exact path="/:media/:id/" component={Details}></Route>
        <Route exact path="/:media/:id/:details" component={Details}></Route>
        <Route exact path="/:media/:id/overview" component={Details}></Route>
      </Switch>



    </Router>
  );
}

export default App;
