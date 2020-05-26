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
    console.log(params)
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
            movie: {
                popular: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
                top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
                upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
                now_playing: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
                trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
            },
        }
        const mediaObject = urlPosibles[params.media]
        urlFetch = mediaObject[params.categoria]

    }
    const allMedia = useFetch(urlFetch);
    let titleSecond = params.media == "tv" ? "TV Shows" : "Movies";
    let titleFirst = ""
    //los titulos van a estar en el objeto
    if (params.categoria == "popular") {
        titleFirst = "Popular"
    }
    else if (params.categoria == "top_rated") {
        titleFirst = "Top Rated"
    }
    else if (params.categoria == "on_the_air") {
        titleFirst = "On The Air"
    }
    else if (params.categoria == "airing_today") {
        titleFirst = "Airing Today"
    }
    else if (params.categoria == "trending") {
        titleFirst = "Trending"
    }
    else if (params.categoria == "upcoming") {
        titleFirst = "Up Coming"
    }
    else if (params.categoria == "now_playing") {
        titleFirst = "Now Playing"
    }


    return (

        <>
            <AllStyled>
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <CardSection
                    info={allMedia && allMedia.results}
                    titleall={titleFirst + " " + titleSecond}
                    cardnumber={allMedia && allMedia.results.length}
                    link={link}
                    media={params.media}></CardSection>
            </AllStyled>
        </>
    )
}
export default All;