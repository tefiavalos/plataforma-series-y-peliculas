import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import TrendingSection from './TrendingSection';

const Tv = () => {

    const popularTv = useFetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const topRatedTv = useFetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const currentlyAiring = useFetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    const airingToday = useFetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    return (
        <>
            {popularTv &&
                <TrendingSection link={"tv/category/popular"} title={"Popular Tv Shows"} info={popularTv.results} media={"tv"}/>
            }

            {topRatedTv &&
                <TrendingSection link={"tv/category/top_rated"} title={"Top Rated Tv Shows"} info={topRatedTv.results} media={"tv"}/>
            }

            {currentlyAiring &&
                <TrendingSection link={"tv/category/on_the_air"} title={"Currently Airing Tv Shows"} info={currentlyAiring.results} media={"tv"}/>
            }

            {airingToday &&
                <TrendingSection link={"tv/category/airing_today"} title={"Airing Today Tv Shows"} info={airingToday.results} media={"tv"}/>
            }
        </>
    )
}


export default Tv