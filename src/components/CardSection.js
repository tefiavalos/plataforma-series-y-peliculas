import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card'

const CardSectionStyled = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
background-color: #141414;
`


const CardSection = ({ info }) => {
    return (
        <CardSectionStyled>
            <Card info={info}></Card>
        </CardSectionStyled>
    )
}

export default CardSection