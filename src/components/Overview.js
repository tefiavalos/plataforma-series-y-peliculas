import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Details from './Details';
import { Imdb } from "styled-icons/fa-brands/Imdb";
import { FacebookSquare } from "@styled-icons/fa-brands/FacebookSquare";
import { Twitter } from "@styled-icons/fa-brands/Twitter";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { Link } from "@ArrowRightstyled-icons/fa-solid/Link"; 
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
        font-size: 14px;
        font-weight: 300;
        width: 50%;
        margin: 0;
        h3{
            font-size: 32px;
            margin:20px 0;
            font-weight: 300;
        }
    }
}
`

const Overview = ({ released, name, overview, seasons, episodes, runtime, genres, production, 
    media, runtimemovies, budget, revenue, img, imgfondo }) => {
    return (
        <>
            <OverviewStyled>
               
                <div className = "container-info">
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
                        {production && production.map((production, i)=>{
                            return(
                                <span> {production.name} </span>
                            )
                        })}</p>
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
                        {production && production.map((production, i)=>{
                            return(
                                <span> {production.name} </span>
                            )
                        })}</p>
                    </>}

                    </div>
                </div>

            </OverviewStyled>
        </>
    )
}

export default Overview