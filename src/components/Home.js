import React from 'react';
import TrendingSection from './TrendingSection'
import useFetch from '../hooks/useFetch';


const Home = () => {

    const trendingMovies = useFetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);
    const trendingTv = useFetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`);



    return (
        <>
            {trendingMovies &&
                <TrendingSection link={"movie/category/trending"} title={"Trending Movies"} info={trendingMovies.results} />
            }

            {trendingTv &&
                <TrendingSection link={"tv/category/trending"} title={"Trending Tv Show"} info={trendingTv.results} />
            }

        </>
        )

}

export default Home