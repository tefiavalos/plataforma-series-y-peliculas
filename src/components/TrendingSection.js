import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CardSection from './CardSection'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const TrendingSectionStyled = styled.section`

.title{
    display:flex;
    .link{
        margin: 20px;
        text-decoration: none;
        color: #2196f3;
    }
}
`



const TrendingSection = ({ info, title, link, media }) => {
    return (
        <>
            <TrendingSectionStyled>
                <div className="title">
                    <h3>{title}</h3>
                    <Link
                        className="link"
                        to={link}>Explore all
                    </Link>
                </div>
                <CardSection
                    info={info}
                    link={link}
                    cardnumber={5}
                    media={media}>
                </CardSection>
            </TrendingSectionStyled>


        </>
    )
}

export default TrendingSection;
