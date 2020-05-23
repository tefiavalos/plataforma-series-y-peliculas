import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import CardSection from './CardSection'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Overview from './Overview';
import Episodes from './Episodes';
import Videos from './Videos';
import Similars from './Similars';

const TitleDetails = styled.div`
display: flex;
justify-content: space-around;
`
const OverviewSection = styled.article`
`

const Details = () => {
    const params = useParams();
    const details = {
        movie: `https://api.themoviedb.org/3/movie/${[params.id]}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
        tv: `https://api.themoviedb.org/3/tv/${[params.id]}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    }
    const media = [params.media]
    const mediaDetails = useFetch(details[media])
    const [page, setPage] = useState("overview")
    const handleClick = e => {
        setPage(e.target.id)
    }
    console.log(mediaDetails)
    const paginacion = {
        overview: <Overview
            released={mediaDetails && mediaDetails.release_date}
            name={mediaDetails && mediaDetails.original_name}
            overview={mediaDetails && mediaDetails.overview}
            seasons={mediaDetails && mediaDetails.number_of_seasons}
            episodes={mediaDetails && mediaDetails.number_of_episodes}
            runtime={mediaDetails && mediaDetails.episode_run_time && mediaDetails.episode_run_time[0]}
            runtimemovies={mediaDetails && mediaDetails.runtime}
            genres={mediaDetails && mediaDetails.genres}
            production={mediaDetails && mediaDetails.production_companies}
            media={media}
            revenue={mediaDetails && mediaDetails.revenue}
            budget={mediaDetails && mediaDetails.budget}
        />,
        videos: <Videos />,
        photos: <Similars />,
        episodes: <Episodes />
    }

    return (
        <>
            <TitleDetails>
                {media == "tv" ?
                    <>
                        <button id="overview" onClick={handleClick}>OVERVIEW</button>
                        <button id="videos" onClick={handleClick}>VIDEOS</button>
                        <button id="episodes" onClick={handleClick}>EPISODES</button>
                        <button id="similars" onClick={handleClick}>SIMILARS</button>
                    </>
                    :
                    <>
                        <button id="overview" onClick={handleClick}>OVERVIEW</button>
                        <button id="videos" onClick={handleClick}>VIDEOS</button>
                        <button id="similars" onClick={handleClick}>SIMILARS</button>
                    </>}

            </TitleDetails>

            {paginacion[page]}
        </>
    )

}

export default Details