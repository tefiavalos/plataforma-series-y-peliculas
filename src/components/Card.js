import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardSection from './CardSection'
import Details from './Details'
import { Link } from 'react-router-dom';

const CardStyled = styled.div`
display: flex;
width: 280px;
heigth: 350px;
flex-direction: column;
margin: 5px 0;
.link{
    text-decoration: none;
    color: rgb(220, 221, 222);
    display: flex;
    flex-direction: column;
    margin:0;
    .img-div {
        heigth: 80%;
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
  .img-div{
    img{
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  transform: scale(1.05);
    }
  }
}

@media(max-width: 910px){
  width: 200px;
  .link{
    .title-div {
      h4 {
        font-size: 15px;
      }
    }
  }
}
`


const Card = ({ img, titlemedia, id, media, name, character }) => {

  return (
    <>
      <CardStyled>
        <Link key={id} className="link" to={`/${media}/${id}/overview`}>
          <div key={id} className="img-div">
            <img alt={`imagen de ${name}`} src={`${img}`} />
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