import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CardSection from './CardSection'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ArrowRight } from "@styled-icons/feather/ArrowRight"

const TrendingSectionStyled = styled.section`

.title{
    display:flex;
    width: 30%;
    margin-top: 30px;
    h3{
        font-size: 32px;
        font-weight: 300;
        margin: 15px 15px 0;
    }
    .link{
        text-decoration: none;  
        margin: 0; 
        .icon{
            margin-top: 20px;
            color: #2196f3;
            width: 30px;
        }
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
                        to={link}>
                            <ArrowRight className="icon" />
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
