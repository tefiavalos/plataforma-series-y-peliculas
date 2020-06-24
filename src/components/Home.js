import React from 'react';
import TrendingSection from './TrendingSection'
import useFetch from '../hooks/useFetch';
import API_URL from '../assets/constants';

const Home = () => {

    const trendingMovies = useFetch(`${API_URL}trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);
    const trendingTv = useFetch(`${API_URL}trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`);



    return (
        <>
            {trendingMovies &&
                <TrendingSection link={"movie/category/trending/page/1"} title={"Trending Movies"} info={trendingMovies.results} media={"movie"} />
            }

            {trendingTv &&
                <TrendingSection link={"tv/category/trending/page/1"} title={"Trending Tv Show"} info={trendingTv.results} media={"tv"} />
            }

        </>
    )

}

export default Home