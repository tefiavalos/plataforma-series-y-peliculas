import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';

const EpisodesStyled = styled.article``


const Episodes = ({seasons}) => {
    //como reemplazar season_number?
    const params = useParams()
    const episodes = useFetch(`https://api.themoviedb.org/3/tv/${[params.id]}/season/{season_number}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    console.log(seasons)
    console.log(episodes)

    return (
        <EpisodesStyled>
            <select>
        {seasons && seasons.map((season) => {
            return(
                <option>{season.name}</option>
            )
        })}
        </select>
        </EpisodesStyled>
    )
}

export default Episodes