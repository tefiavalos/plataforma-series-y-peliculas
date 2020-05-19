import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import CardSection from './CardSection'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const AllStyled = styled.section`
background-color: #141414;
color: #fff;
.title{
    display:flex;
    .link{
        margin: 20px;
        text-decoration: none;
        color: #2196f3;
    }
}
`
const All = ({ title, link }) => {
    const params = useParams();
    let urlFetch = ''
    if (params && params.media) {
        const urlPosibles = {
            tv: {
                popular: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
                top_rated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
                on_the_air: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
                airing_today: `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
                trending: `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`
            },
            movies: {
                popular: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
                top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
                upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
                now_playing: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
                trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
            },
        }
        const primerObjeto = urlPosibles[params.media]
        console.log(primerObjeto)
        urlFetch = primerObjeto[params.categoria]
        console.log(urlFetch)
    }
    const trendingTv = useFetch(urlFetch);

    return (
        <>
            <AllStyled>
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <CardSection info={trendingTv && trendingTv.results} titleall={"Trending Series"} cardnumber={trendingTv && trendingTv.results.length} link={link}></CardSection>
            </AllStyled>
        </>
    )
}
export default All;