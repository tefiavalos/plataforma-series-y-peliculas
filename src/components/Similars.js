import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Card from './Card'

const SimilarsStyled = styled.article`
background-color: #141414;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`

const Similars = () => {
const params = useParams()
const similars = useFetch(`https://api.themoviedb.org/3/${[params.media]}/${[params.id]}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
console.log(similars)
    return(
    <SimilarsStyled>
        {similars && similars.results && similars.results.map((similar) => {
                return(
                    <Card 
                    img={`https://image.tmdb.org/t/p/w500${similar.poster_path}`} //y si no hay?
                    titlemedia={similar.title} />
                )
            })}
    </SimilarsStyled>
        )
}

export default Similars