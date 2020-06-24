import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import notAvailable from '../assets/img-not-available.png'

const CardSectionStyled = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;

h3{
    display:block;
}
`


const CardSection = ({ info, cardnumber, titleall, media }) => {



    return (
        <>
            <h3>{titleall}</h3>
            <CardSectionStyled>
                {info &&
                    info.map((element, i) => {
                        if (i < cardnumber) {
                            return (
                                <div key={element.id}>
                                    <Card
                                        media={media}
                                        id={element.id}
                                        img={element.poster_path !== undefined && element.poster_path !== null ?
                                            `https://image.tmdb.org/t/p/w500${element.poster_path}` :
                                            `${notAvailable}`}
                                        titlemedia={element.original_name ? element.original_name : element.title}
                                    />
                                </div>
                            )
                        }
                    })
                }
            </CardSectionStyled>
        </>
    )
}

export default CardSection