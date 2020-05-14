import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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


const Card = ({ info }) => {
    return (
        <>
            {
                info.map((element) => {
                    return (
                        <CardStyled>
                            <div className="img-div">
                            <img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}></img>
                            </div>
                            <div className="title-div">
                            <h4>{element.media_type == "tv" ? element.original_name : element.title}</h4>
                            </div>
                        </CardStyled>
                    )
                })
            }
        </>
    )
}

export default Card