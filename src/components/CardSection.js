import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '@styled-icons/feather/ArrowRight';

const CardStyled = styled.div`
display: flex;
width: 300px;
height: auto;
color: white;
background-color: black`



const CardSection = ({ info, title }) => {
    return (
<>
        <p>{ title }</p>
        
        <div>
            {
        info.map((element) => {

            return (
                <>
                <p>title={element.title} </p>
                <img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}></img> 
                </>                
                    )
        })
        }
        </div>
</>
    )
}

export default CardSection;
