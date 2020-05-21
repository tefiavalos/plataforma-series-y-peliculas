import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardSection from './CardSection'
import Details from './Details'
import { Link } from 'react-router-dom';

const CardStyled = styled.div`
width: 18%;
display: flex;
flex-direction: column;
background-color: #141414;
color: #fff;
margin: 5px 0;
.link{
    text-decoration: none;
    color: #fff;
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
          margin: 2px;
        }
      }  
}
`


const Card = ({ img, titlemedia, id, media }) => {

    return (
        <>
            <CardStyled>
                <Link className="link" to ={`/${media}/${id}`}>
                <div className="img-div">
                    <img src={img} />
                </div>
                <div className="title-div">
                    <h4>{titlemedia}</h4>
                </div>
                </Link>
            </CardStyled>
        </>
    )
}

export default Card