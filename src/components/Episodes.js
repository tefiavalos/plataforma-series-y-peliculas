import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import { Link, useParams, useHistory } from 'react-router-dom';

const EpisodesStyled = styled.article``


const Episodes = ({ seasons }) => {
    const params = useParams()
    const history = useHistory();
    const [seasonNumber, setSeasonNumber] = useState(1);
    
    const episodes = useFetch(`https://api.themoviedb.org/3/tv/${[params.id]}/season/${seasonNumber}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    console.log(seasons)
    console.log(seasonNumber)
    console.log(episodes)
    
    const handleChange = (e) => {
        setSeasonNumber(e.target.value);
        history.push(seasonNumber);
        
    }
    
    return (
        <EpisodesStyled>
            <select value={seasonNumber} onChange={handleChange}>
                {seasons && seasons.map((season) => {
                    return (
                    <option value={season.season_number}>Season {season.season_number}</option>
                    )
                })}
            </select>
             {/* {episodes &&
                episodes.espisodes.map(e => {
                    return (
                        <div>
                            {
                                <img
                                    src={`https://image.tmdb.org/t/p/original${e.still_path}`}
                                    alt={e.name} />
                            }
                            <h3>
                                <span>
                                    S{e.season_number}E{e.episode_number}
                                </span>
                                {e.name}
                            </h3>
                            <p>{e.overview}</p>
                        </div>)})
                }  */}
        </EpisodesStyled>
    )
}

export default Episodes