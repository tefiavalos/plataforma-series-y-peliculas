import React, { useState, useEffect } from 'react';
import useFetch from '../hook/useFetch';
import TrendingSection from './TrendingSection';

const Movies = () => {

    const popularMovies = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const topRatedMovies = useFetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const upcomingMovies = useFetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    const nowPlayingMovies = useFetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    return (

        <>
            {popularMovies &&
                <TrendingSection title={"Popular Movies"} info={popularMovies.results} />
            }

            {topRatedMovies &&
                <TrendingSection title={"Top Rated Movies"} info={topRatedMovies.results} />
            }

            {upcomingMovies &&
                <TrendingSection title={"Upcoming Movies"} info={upcomingMovies.results} />
            }

            {nowPlayingMovies &&
                <TrendingSection title={"Now Playing Movies"} info={nowPlayingMovies.results} />
            }
        </>
    )
}

export default Movies