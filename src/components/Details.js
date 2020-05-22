import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import CardSection from './CardSection'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Overview from './Overview';
import Videos from './Videos';

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
    const paginacion = {
        overview: <Overview />,
        videos: <Videos />,
        /* photos: <Photos />,      
        episodes: <Episodes /> */}

    return (
        <>
            <TitleDetails>
                <h2 id="overview" onClick={handleClick}>OVERVIEW</h2>
                <h2 id="videos" onClick={handleClick}>VIDEOS</h2>
                {/* <h2 id="photos" onClick={handleClick}>PHOTOS</h2>
                <h2 id="episodes" onClick={handleClick}>EPISODES</h2> */}
            </TitleDetails>
            <OverviewSection>
                <h3>Storyline</h3>
                {/* <p>{detailsMovie && detailsMovie.overview}</p> */}
                <div>
                    <div>
                        <p>Released {mediaDetails && mediaDetails.release_date}</p>
                        {/* <p>Director {detailsMovie && detailsMovie.director}</p>
                        <p>Status {detailsMovie && detailsMovie.status}</p>
                        <p>Production {detailsMovie && detailsMovie.production_companies
                            && detailsMovie.production_companies[0].name},
                            {detailsMovie && detailsMovie.production_companies 
                            && detailsMovie.production_companies[1].name}</p>
                    </div>
                    <div>
                        <p>Runtime {detailsMovie && detailsMovie.runtime} min.</p>
                        <p>Genres {detailsMovie && detailsMovie.genres.name}</p> {/*array*/}
                        {/* <p>Language {detailsMovie && detailsMovie.spoken_languages.name}</p> */} {/*array*/}

                    </div>
                </div> 
            </OverviewSection>
            {paginacion[page]}
        </>
    )

}

export default Details