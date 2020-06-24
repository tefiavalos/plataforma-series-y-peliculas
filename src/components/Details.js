import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Overview from './Overview';
import Episodes from './Episodes';
import Videos from './Videos';
import Similars from './Similars';
import Cast from './Cast';
import '../App.css';
import API_URL from '../assets/constants';
import notAvailable from '../assets/img-not-available.png'

const TitleDetails = styled.div`
display: flex;
flex-direction: column;
.imagenfondo{
    width: 100%
}
a{
    text-decoration: none;
}
.buttons{
    display: flex;
    justify-content: center;
    width: 100%;
button{
    border: none;
    background-color: rgb(54, 57, 63);
    color: rgb(168, 170, 173);
    width: auto;
    margin: 20px;
    font-size: 22px;
    font-family: inherit;
    font-weight: bold;
    border-color:none;
    outline:none;
}

}
a :hover{
    color:rgb(220, 221, 222);
    cursor: pointer;
}

a :focus{
    color:rgb(220, 221, 222);
    text-decoration: underline;
}

@media(max-width: 910px){
    .buttons{
        button{
    margin: 2px;
    font-size: 13px;
        } 
    }
}
`


const Details = () => {
    const params = useParams();
    const details = {
        movie: `${API_URL}movie/${[params.id]}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
        tv: `${API_URL}tv/${[params.id]}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    }
    const media = [params.media]
    const mediaDetails = useFetch(details[media])

    const credits = useFetch(`${API_URL}${[params.media]}/${[params.id]}/credits?api_key=${process.env.REACT_APP_API_KEY}`)

    const handleClick = e => {
        return(e.target.id)
    }

    const paginacion = {
        overview: <Overview
            img={mediaDetails && mediaDetails.poster_path}
            released={mediaDetails && mediaDetails.release_date}
            name={mediaDetails && mediaDetails.original_name ?
                mediaDetails.original_name
                : mediaDetails && mediaDetails.title}
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
            credits={credits}
            vote={mediaDetails && mediaDetails.vote_average}
        />,
        videos: <Videos params={params} />,
        similars: <Similars params={params} />,
        episodes: <Episodes
            seasons={mediaDetails && mediaDetails.seasons} />,
        cast: <Cast credits={credits} />
    }

    return (
        <>
            <TitleDetails>
                <img 
                src = {mediaDetails && mediaDetails.backdrop_path !== undefined && mediaDetails && mediaDetails.backdrop_path !== null ?
                    `https://image.tmdb.org/t/p/w500${mediaDetails && mediaDetails.backdrop_path}` :
                    `${notAvailable}`} 
                className ="imagenfondo"
                alt = {`${mediaDetails && mediaDetails.title ? 
                mediaDetails && mediaDetails.title : 
                mediaDetails && mediaDetails.original_name}`}></img>

                {media === "tv" ?

                    <div className="buttons">
                        <Link to={`/${params.media}/${params.id}/overview`} >
                            <button
                                id="overview"
                                onClick={handleClick}>
                                OVERVIEW
                            </button>
                        </Link>
                        <Link to={`/${params.media}/${params.id}/cast`}>
                            <button
                                id="cast"
                                onClick={handleClick}>
                                CAST
                            </button>
                        </Link>
                        <Link to={`/${params.media}/${params.id}/videos`}>
                            <button
                                id="videos"
                                onClick={handleClick}>
                                VIDEOS
                            </button>
                        </Link>
                        <Link to={`/${params.media}/${params.id}/episodes`}>
                            <button
                                id="episodes"
                                onClick={handleClick}>
                                EPISODES
                            </button>
                        </Link>
                        <Link to={`/${params.media}/${params.id}/similars`}>
                            <button id="similars" onClick={handleClick}>
                                SIMILARS
                            </button>
                        </Link>
                    </div>

                    :

                    <div className="buttons">
                        <Link to={`/${params.media}/${params.id}/overview`}>
                            <button id="overview" onClick={handleClick}>
                                OVERVIEW
                                </button>
                        </Link>
                        <Link to={`/${params.media}/${params.id}/cast`}>
                            <button
                                id="cast"
                                onClick={handleClick}>
                                CAST
                                </button>
                        </Link>
                        <Link to={`/${params.media}/${params.id}/videos`}>
                            <button id="videos" onClick={handleClick}>
                                VIDEOS
                                </button>
                        </Link>
                        <Link to={`/${params.media}/${params.id}/similars`}>
                            <button
                                id="similars"
                                onClick={handleClick}>
                                SIMILARS
                                </button>
                        </Link>
                    </div>
                }

            </TitleDetails>

            {paginacion[params.details]}
        </>
    )

}

export default Details