import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import { Link, useParams, useHistory } from 'react-router-dom';

const EpisodesStyled = styled.article`
select{
    margin: 10px;
    -webkit-appearance: none;
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
    color: rgb(220, 221, 222);
    background-color: rgb(35, 39, 42);
    cursor: pointer;
    border-radius: 6px;
    padding: 2px 30px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(220, 221, 222);
}
.container-episodes{
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    @media(max-width: 910px){
        flex-direction: column;
    }
.card-episode{
    width:30%;
    margin: 10px;
    @media(max-width: 910px){
       width: 90%;
    }
    img{
        width:100%;
    }
    h3{
        font-weight: 400;
        font-size: 18px;
        @media(max-width: 910px){
            font-size: 15px;
        }
    span{
    line-height: 20px;
    margin-top: 0px;
    color: rgb(33, 150, 243);
    margin-right: 10px;
    font-weight: 400;
    @media(max-width: 910px){
        font-size: 15px;
    }
    }
}
    p{
        font-weight: 300;
        @media(max-width: 910px){
            font-size: 10px;
        }

    }
}
}

`


const Episodes = ({ seasons }) => {
    const params = useParams()
    const history = useHistory();
    const [seasonNumber, setSeasonNumber] = useState(1);

    const episodes = useFetch(`https://api.themoviedb.org/3/tv/${[params.id]}/season/${seasonNumber}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

    // ಠ_ಠ
    console.log(seasons)
    console.log(seasonNumber)
    console.log(episodes)

    const handleChange = (e) => {
        setSeasonNumber(Number(e.target.value));
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
            <div className="container-episodes">
                {episodes &&
                    episodes.episodes.map(e => {
                        return (

                            <div className="card-episode">
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
                            </div>
                        )
                    })
                }
            </div>
        </EpisodesStyled>
    )
}

export default Episodes
