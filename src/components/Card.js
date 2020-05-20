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
color:
margin: 5px 0;
.img-div{
    width:100%;
    height: 80%;
img{
    width: 100%;
    height: 100%;
}
}
.title-div{
    h4{
        margin: 10px;
    }
}
`


const Card = ({ img, titlemedia, id, media }) => {

    return (
        <>
            <CardStyled>
                <Link to ={`/${media}/${id}`}>
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