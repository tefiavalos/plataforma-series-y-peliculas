import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardSection from './CardSection'

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


const Card = ({ img, titlemedia }) => {

    return (
        <>
            <CardStyled>
                <div className="img-div">
                    <img src={img} />
                </div>
                <div className="title-div">
                    <h4>{titlemedia}</h4>
                </div>
            </CardStyled>
        </>
    )
}

export default Card