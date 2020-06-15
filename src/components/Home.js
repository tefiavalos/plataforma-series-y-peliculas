import React from 'react';
import TrendingSection from './TrendingSection'
import useFetch from '../hooks/useFetch';


const Home = () => {

    const trendingMovies = useFetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=6a93319b2d78795675b8bd9aa0965a95`);
    const trendingTv = useFetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=6a93319b2d78795675b8bd9aa0965a95`);



    return (
        <>
            {trendingMovies &&
                <TrendingSection link={"movie/category/trending/page/1"} title={"Trending Movies"} info={trendingMovies.results} media={"movie"}/>
            }

            {trendingTv &&
                <TrendingSection link={"tv/category/trending/page/1"} title={"Trending Tv Show"} info={trendingTv.results} media={"tv"}/>
            }

        </>
        )

}

export default Home
