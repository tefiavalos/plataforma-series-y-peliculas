import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card'
import { Link, useParams } from 'react-router-dom';
const CastStyled = styled.article`
display:flex;
flex-wrap: wrap;
justify-content: space-around;
`

const Cast = (credits) =>{
    
    const params = useParams()
    console.log(params)
    return(
        
    <CastStyled>
     {credits && credits.credits && credits.credits.cast.map((credit) => {
        return(
           <Card
           img={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
           name={credit.name}
           character={credit.character}
           media={"person"}
           id={credit.id}
           >
           </Card>
        )
    }) }
    </CastStyled>
    )
}

export default Cast