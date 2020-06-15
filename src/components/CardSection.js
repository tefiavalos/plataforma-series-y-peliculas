import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card'
import useFetch from '../hooks/useFetch';

const CardSectionStyled = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;

h3{
    display:block;
}
`

// trata de respetar la convencion camelCase para tus nombres de variables: cardNumber, titleAll
const CardSection = ({ info, cardnumber, titleall, media }) => {

    return (
        <>
            <h3>{titleall}</h3>
            <CardSectionStyled>
                {info &&
                    info.map((element, i) => {
                        if (i < cardnumber) {
                            return (
                                // No es necesario react fragment aqui. 
                                // Solo es necesario cuando hay mas de un tag sin un padre en comun. 
                                <>
                                    <Card
                                        key={element.id}
                                        media={media}
                                        id={element.id}
                                        img={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                                        titlemedia={element.original_name ? element.original_name : element.title}
                                    />
                                </>
                            )
                        }
                    })
                }
            </CardSectionStyled>
        </>
    )
}

export default CardSection
