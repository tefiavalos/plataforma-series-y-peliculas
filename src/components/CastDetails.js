import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Imdb } from "@styled-icons/fa-brands/Imdb";
import API_URL from '../assets/constants'

const CastDetailsStyled = styled.article`
display: flex;
@media(max-width: 910px){
    flex-direction: column;
    align-items: center;
}
.img{
    width: 20%;
    margin: 30px;
    img{
        width: 100%;
    }
}
@media(max-width: 910px){
    .img{
        width: 80%;
        margin: 5px;
    }
}
.info{
    width: 40%;
    h3{
        margin: 30px 0;
        font-size: 32px;
        font-weight: 300;
    }
}
    @media(max-width: 910px){
        .info{
            width: 80%;
            text-align: center;
            h3{font-size: 20px;}
            p{font-size: 12px;}
        }
    }
.container-icons{
    width: 25%;
    display:flex;
    margin-top: 50px;
    justify-content: space-between;
    a{
        .icon{
            color:rgb(220, 221, 222);
                width: 30px;
        }
    }
    }
    @media(max-width: 910px){
        .container-icons{
            width: 80%;
            display:flex;
            margin-top: 10px;
            justify-content: space-between;
            a{
                .icon{
                        width: 15px;
                }
            }
            }
    }
    
    `

const CastDetails = () => {
    const params = useParams();
    const castDetails = useFetch(`
    ${API_URL}person/${[params.id]}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

    return (
        <CastDetailsStyled>
            <div className="img">
                <img 
                src={`https://image.tmdb.org/t/p/w500${castDetails && castDetails.profile_path}`}
                alt={`${castDetails && castDetails.name}`}></img>
            </div>
            <div className="info">
                <h3>{castDetails && castDetails.name}</h3>
                <p>{castDetails && castDetails.biography}</p>
                <div className="container-icons">
                    <a 
                    href={`https://www.imdb.com/name/${castDetails && castDetails.imdb_id}`} 
                    target="_blank"
                    rel="noopener noreferrer"><Imdb className="icon" /></a>
                </div>
            </div>

        </CastDetailsStyled>
    )
}

export default CastDetails