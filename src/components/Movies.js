import React from 'react';
import useFetch from '../hooks/useFetch';
import TrendingSection from './TrendingSection';
import API_URL from '../assets/constants';

const Movies = () => {

    const popularMovies = useFetch(`${API_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const topRatedMovies = useFetch(`${API_URL}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const upcomingMovies = useFetch(`${API_URL}movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    const nowPlayingMovies = useFetch(`${API_URL}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    return (

        <>
            {popularMovies &&
                <TrendingSection link={"movie/category/popular/page/1"} title={"Popular Movies"} info={popularMovies.results} media={"movie"} />
            }

            {topRatedMovies &&
                <TrendingSection link={"movie/category/top_rated/page/1"} title={"Top Rated Movies"} info={topRatedMovies.results} media={"movie"} />
            }

            {upcomingMovies &&
                <TrendingSection link={"movie/category/upcoming/page/1"} title={"Upcoming Movies"} info={upcomingMovies.results} media={"movie"} />
            }

            {nowPlayingMovies &&
                <TrendingSection link={"movie/category/now_playing/page/1"} title={"Now Playing Movies"} info={nowPlayingMovies.results} media={"movie"} />
            }

        </>
    )
}

export default Movies