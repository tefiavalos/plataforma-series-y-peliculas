import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CardSection from './CardSection'

const TrendingSectionStyled = styled.section`
background-color: #141414;
color: #fff;
.title{
    display:flex;
    .link{
        margin: 20px;
        text-decoration: none;
        color: #2196f3;
    }
}
`



const TrendingSection = ({ info, title }) => {
    return (
        <TrendingSectionStyled>
            <div className="title">
                <h3>{title}</h3>
                <Link className="link" to="/movies">Explore all</Link>
            </div>
            <CardSection info={info} cardnumber={5}></CardSection>
        </TrendingSectionStyled>
    )
}

export default TrendingSection;
