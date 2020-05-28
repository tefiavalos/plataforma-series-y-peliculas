import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Details from './Details';
import { Imdb } from "@styled-icons/fa-brands/Imdb";
import { FacebookSquare } from "@styled-icons/fa-brands/FacebookSquare";
import { Twitter } from "@styled-icons/fa-brands/Twitter";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { LinkIcon } from "@styled-icons/fa-solid/Link";
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
//si voy a la peli con un link webdepelis.com/id/ se va a ver bien?
const OverviewStyled = styled.div`

h3{
    font-weight: 400;
    font-size: 30px;
}
.container-info{
    display: flex;
    img{
        width: 20%;
        heigth: auto;
        margin: 20px;
    }
    .info{
        font-size: 15px;
        font-weight: 300;
        width: 40%;
        margin: 0;
        h3{
            font-size: 32px;
            margin:20px 0;
            font-weight: 300;
        }
        .container-icons{
            width: 25%;
            display:flex;
            margin-top: 50px;
            justify-content: space-between;
            a{
                .icon{
                    color:rgb(220, 221, 222);
                        width: 30px;
                }}
        }
    }
}
`




const Overview = ({ released, name, overview, seasons, episodes, runtime, genres, production,
    media, runtimemovies, budget, revenue, img }) => {
    const params = useParams();
    console.log(params)
    const externalLink = useFetch(`https://api.themoviedb.org/3/${params.media}/${params.id}/external_ids?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    console.log(externalLink)


    return (
        <>
            <OverviewStyled>
                
                <div className="container-info">
                    <img src={`https://image.tmdb.org/t/p/w500${img}`} />
                    <div className="info">
                        {media == "tv" ?
                            <>
                                <h3>{name}</h3>
                                <p>{overview}</p>
                                <p>Seasons: {seasons}</p>
                                <p>Episodes: {episodes}</p>
                                <p>Runtime: {runtime} min.</p>
                                <p>Genres:
                        {genres && genres.map((genre, i) => {
                                    return (
                                        <span> {genre.name} </span>
                                    )
                                }
                                )
                                    }
                                </p>
                                <p>Pruduction:
                        {production && production.map((production, i) => {
                                    return (
                                        <span> {production.name} </span>
                                    )
                                })}</p>

                                <div className="container-icons">
                                    <>
                                        {externalLink && 'imdb_id' && <a href={`https://www.imdb.com/title/${externalLink.imdb_id}`} target="_blank"><Imdb className="icon" /></a>}
                                        {externalLink && 'facebook_id' && <a href={`https://www.facebook.com/${externalLink.facebook_id}`} target="_blank"><FacebookSquare className="icon" /></a>}
                                        {externalLink && 'twitter_id' && <a href={`https://www.twitter.com/${externalLink.twitter_id}`} target="_blank"><Twitter className="icon" /></a>}
                                        {externalLink && 'instagram_id' && <a href={`https://www.instagram.com/${externalLink.instagram_id}`} target="_blank"><Instagram className="icon" /></a>}
                                    </>
                                </div>
                            </>
                            :
                            <>
                                <h3>{name}</h3>
                                <p>{overview}</p>
                                <p>Released: {released} </p>
                                <p>Runtime: {runtimemovies} min.</p>
                                <p>Genres:
                        {genres && genres.map((genre, i) => {
                                    return (
                                        <span> {genre.name} </span>
                                    )
                                }
                                )
                                    }
                                </p>
                                <p>Budget: ${budget}</p>
                                <p>Revenue: ${revenue}</p>
                                <p>Pruduction:
                        {production && production.map((production, i) => {
                                    return (
                                        <span> {production.name} </span>
                                    )
                                })}</p>
                                <div className="container-icons">
                                    <>
                                        {externalLink && 'imdb_id' && <a href={`https://www.imdb.com/title/${externalLink.imdb_id}`} target="_blank"><Imdb className="icon" /></a>}
                                        {externalLink && 'facebook_id' && <a href={`https://www.facebook.com/${externalLink.facebook_id}`} target="_blank"><FacebookSquare className="icon" /></a>}
                                        {externalLink && 'twitter_id' && <a href={`https://www.twitter.com/${externalLink.twitter_id}`} target="_blank"><Twitter className="icon" /></a>}
                                        {externalLink && 'instagram_id' && <a href={`https://www.instagram.com/${externalLink.instagram_id}`} target="_blank"><Instagram className="icon" /></a>}
                                    </>
                                </div>
                            </>}

                    </div>
                </div>
                <div>

                </div>


            </OverviewStyled>



        </>
    )
}

export default Overview