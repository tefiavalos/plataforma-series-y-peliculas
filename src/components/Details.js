import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import CardSection from './CardSection'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Details = () => {
    const params = useParams();
    console.log(params)

    const detailsMovie = useFetch(`https://api.themoviedb.org/3/movie/${[params.id]}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    const detailsTv= useFetch(`https://api.themoviedb.org/3/tv/${[params.id]}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        console.log(detailsMovie)

   


return(
    "hola"
)

}

export default Details