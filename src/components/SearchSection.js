import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import { Link, useParams, useHistory } from 'react-router-dom';
import Card from './Card'

const SearchSectionStyled = styled.article`
display:flex;
flex-wrap: wrap;
justify-content: space-around;
`

const SearchSection = () => {
    const params = useParams()
    console.log(params, "Params")
    const busqueda = useFetch(`
    https://api.themoviedb.org/3/search/multi?api_key=219be100a89ca386f6d06ac96e56548e&language=en-US&query=${params.busqueda}&page=1&include_adult=true`)
    console.log(busqueda)

    return (
        <SearchSectionStyled>
        {busqueda && busqueda.results.map((result) =>{
            return(
            <Card
            img={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
            name={result.title}
            media={result.media_type}
            id={result.id}>
            </Card>
            )
            
        })}
         </SearchSectionStyled>
        )
       
}

export default SearchSection