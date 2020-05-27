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
import '../App.css';

const TitleDetails = styled.div`
display: flex;
flex-direction: column;
.imagenfondo{
    width: 100%
}
.buttons{
    display:flex;
    justify-content: center;
    width: 100%;
button{
    background-color: rgb(35, 39, 42);;
    color: #585858;
    width: auto;
    margin: 20px;
    font-size: 20px;
    border-top: 1px solid rgb(35, 39, 42);;
    border-right: 1px solid rgb(35, 39, 42);;
    border-left: 1px solid rgb(35, 39, 42);;
    border-bottom: 2px solid ;
    font-family: inherit;
    font-weight: bold;
}
}
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
            img={mediaDetails && mediaDetails.poster_path}
            released={mediaDetails && mediaDetails.release_date}
            name={mediaDetails && mediaDetails.original_name ? mediaDetails.original_name : mediaDetails && mediaDetails.title}
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
        videos: <Videos params={params} />,
        similars: <Similars params={params} />,
        episodes: <Episodes
            seasons={mediaDetails && mediaDetails.seasons} />
    }

    return (
        <>
            <TitleDetails>
                <img src={`https://image.tmdb.org/t/p/w500${mediaDetails && mediaDetails.backdrop_path}`} className="imagenfondo"></img>
                
                    {media == "tv" ?            
                        <>
                        <div className="buttons">
                            <Link to={`/${params.media}/${params.id}/overview`} ><button id="overview" onClick={handleClick}>OVERVIEW</button></Link>
                            <Link to={`/${params.media}/${params.id}/videos`}><button id="videos" onClick={handleClick}>VIDEOS</button></Link>
                            <Link to={`/${params.media}/${params.id}/episodes`}><button id="episodes" onClick={handleClick}>EPISODES</button></Link>
                            <Link to={`/${params.media}/${params.id}/similars`}><button id="similars" onClick={handleClick}>SIMILARS</button></Link>
                        </div>
                        </>
                        :
                        <>
                        <div className="buttons">
                            <Link to={`/${params.media}/${params.id}/overview`}><button id="overview" onClick={handleClick}>OVERVIEW</button></Link>
                            <Link to={`/${params.media}/${params.id}/videos`}><button id="videos" onClick={handleClick}>VIDEOS</button></Link>
                            <Link to={`/${params.media}/${params.id}/similars`}><button id="similars" onClick={handleClick}>SIMILARS</button></Link>
                            </div>
                        </>}
                
            </TitleDetails>

            {paginacion[page]}
        </>
    )

}

export default Details