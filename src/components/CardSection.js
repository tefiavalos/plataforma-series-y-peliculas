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


const CardSection = ({ info, cardnumber }) => {
    return (
        <CardSectionStyled>
            {info &&
                info.map((element, i) => {
                    if (i < cardnumber) {
                        return (
                            <Card
                                img={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                                titlemedia={element.original_name ? element.original_name : element.title}
                            />
                        )
                    }
                })
            }
        </CardSectionStyled>
    )
}

export default CardSection