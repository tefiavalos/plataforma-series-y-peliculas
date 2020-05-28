import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardSection from './CardSection'
import Details from './Details'
import { Link } from 'react-router-dom';

const CardStyled = styled.div`
width: 18%;
display: flex;
flex-direction: column;
margin: 5px 0;
.link{
    text-decoration: none;
    color: rgb(220, 221, 222);
    display: flex;
    flex-direction: column;
    margin:0;
    .img-div {
        flex: 6;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title-div {
        flex: 1;
        h4 {
          margin-top: 10px;
          font-weight: 300;
          font-size: 20px;
        }
      }  
}
:hover{
  
}
`


const Card = ({ img, titlemedia, id, media, name, character }) => {

    return (
        <>
            <CardStyled>
                <Link className="link" to ={`/${media}/${id}/overview`}>
                <div className="img-div">
                    <img src={img} />
                </div>
                <div className="title-div">
                    <h4>{titlemedia}</h4>
                    <h4>{name}</h4>
                    <p>{character}</p>
                </div>
                </Link>
            </CardStyled>
        </>
    )
}

export default Card