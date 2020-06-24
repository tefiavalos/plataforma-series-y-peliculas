import React from 'react';
import useFetch from '../hooks/useFetch';
import TrendingSection from './TrendingSection';
import API_URL from '../assets/constants';

const Tv = () => {
    const popularTv = useFetch(`${API_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const topRatedTv = useFetch(`${API_URL}tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const currentlyAiring = useFetch(`${API_URL}tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    const airingToday = useFetch(`${API_URL}tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    return (
        <>
            {popularTv &&
                <TrendingSection link={`tv/category/popular/page/1`} title={"Popular Tv Shows"} info={popularTv.results} media={"tv"} />
            }

            {topRatedTv &&
                <TrendingSection link={"tv/category/top_rated/page/1"} title={"Top Rated Tv Shows"} info={topRatedTv.results} media={"tv"} />
            }

            {currentlyAiring &&
                <TrendingSection link={"tv/category/on_the_air/page/1"} title={"Currently Airing Tv Shows"} info={currentlyAiring.results} media={"tv"} />
            }

            {airingToday &&
                <TrendingSection link={"tv/category/airing_today/page/1"} title={"Airing Today Tv Shows"} info={airingToday.results} media={"tv"} />
            }
        </>
    )
}


export default Tv