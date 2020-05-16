import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../hook/useFetch';
import TrendingSection from './TrendingSection';

const Tv = () => {

    const popularTv = useFetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const topRatedTv = useFetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const currentlyAiring = useFetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    const airingToday = useFetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    return (
        <>
            {popularTv &&
                <TrendingSection title={"Popular Tv Shows"} info={popularTv.results} />
            }

            {topRatedTv &&
                <TrendingSection title={"Top Rated Tv Shows"} info={topRatedTv.results} />
            }

            {currentlyAiring &&
                <TrendingSection title={"Currently Airing Tv Shows"} info={currentlyAiring.results} />
            }

            {airingToday &&
                <TrendingSection title={"Airing Today Tv Shows"} info={airingToday.results} />
            }
        </>
    )
}


export default Tv