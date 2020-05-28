import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Imdb } from "@styled-icons/fa-brands/Imdb";
import { FacebookSquare } from "@styled-icons/fa-brands/FacebookSquare";
import { Twitter } from "@styled-icons/fa-brands/Twitter";
import { Instagram } from "@styled-icons/fa-brands/Instagram";

const CastDetailsStyled = styled.article`
display: flex;
img{
    width: 20%;
    margin: 30px;
}
.info{
    width: 40%;
    h3{
        margin: 30px 0;
        font-size: 32px;
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
    }`

const CastDetails = () => {
    const params = useParams();
    const castDetails = useFetch(`https://api.themoviedb.org/3/person/${[params.id]}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    console.log(castDetails)
    return (
        <CastDetailsStyled>
            
            <img src={`https://image.tmdb.org/t/p/w500${castDetails && castDetails.profile_path}`}></img>
            <div className="info">
            <h3>{castDetails && castDetails.name}</h3>
            <p>{castDetails && castDetails.biography}</p>
            <div className="container-icons">
            <a href={`https://www.imdb.com/name/${castDetails&&castDetails.imdb_id}`} target="_blank"><Imdb className="icon" /></a>
            </div>
            </div>
        
        </CastDetailsStyled>
    )
}

export default CastDetails