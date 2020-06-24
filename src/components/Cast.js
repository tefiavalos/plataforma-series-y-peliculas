import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import notAvailable from '../assets/img-not-available.png'

const CastStyled = styled.article`
display:flex;
flex-wrap: wrap;
justify-content: space-around;
`

const Cast = (credits) => {

    return (

        <CastStyled>
            {credits && credits.credits && credits.credits.cast.map((credit) => {
                return (
                    <Card
                        img={credit.profile_path !== undefined && credit.profile_path !== null ?
                            `https://image.tmdb.org/t/p/w500${credit.profile_path}` :
                            `${notAvailable}`
                        }
                        name={credit.name}
                        character={credit.character}
                        media={"person"}
                        id={credit.id}
                        key={credit.id}
                    >
                    </Card>
                )
            })}
        </CastStyled>
    )
}

export default Cast