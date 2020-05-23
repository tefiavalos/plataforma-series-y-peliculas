import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Details from './Details';
//si voy a la peli con un link webdepelis.com/id/ se va a ver bien?
const OverviewStyled = styled.div`
`

const Overview = ({ released, name, overview, seasons, episodes, runtime, genres, production, media, runtimemovies, budget, revenue }) => {
    return (
        <>
            <OverviewStyled>
                <h3>Storyline</h3>
                {/* <p>{detailsMovie && detailsMovie.overview}</p> */}
                <div>
                    <div>
                        {media == "tv" ?
                        <>
                        <p>Overview: {overview}</p>
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