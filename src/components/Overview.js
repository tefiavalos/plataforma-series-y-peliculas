import React from 'react';
import styled from 'styled-components';
import { Imdb } from "@styled-icons/fa-brands/Imdb";
import { FacebookSquare } from "@styled-icons/fa-brands/FacebookSquare";
import { Twitter } from "@styled-icons/fa-brands/Twitter";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import API_URL from '../assets/constants';

const OverviewStyled = styled.div`

h3{
    font-weight: 400;
    font-size: 30px;
}
.container-info{
    display: flex;
    img{
        width: 20%;
        heigth: auto;
        margin: 20px;
    }
    .info{
        font-size: 15px;
        font-weight: 300;
        width: 40%;
        margin: 0;
        h3{
            font-size: 32px;
            margin:20px 0;
            font-weight: 300;
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
                }}
        }
    }
    .MuiRating-decimal{
        color: #2196f3;
    }
    .MuiBox-root-2{
        padding: 0;
        margin-bottom: 20px;
    }
}
@media(max-width: 910px){
    .container-info{
        flex-direction: column;
        width: 100%;
        align-items: center;
        img{ 
            display: none;
        }
        .info{
            width: 90%;
            text-align:center;
            font-size: 12px;
            .container-icons{
                width: 100%;
                margin-top: 20px;
                a{
                    .icon{
                            width: 15px;
                    }
                }
            }
        }
    }
    .MuiBox-root-2{
        padding: 0;
        margin-bottom: 10px;
        .MuiSvgIcon-root{
            width: 18px;
        }
    }
}
`




const Overview = ({ released, name, overview, seasons, episodes, runtime, genres, production,
    media, runtimemovies, budget, revenue, img, vote }) => {

    const params = useParams();
    const externalLink = useFetch(`
    ${API_URL}${params.media}/${params.id}/external_ids?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    const [value, setValue] = React.useState(2.5);

    return (
        <>
            <OverviewStyled>
                <div className="container-info">
                    <img 
                    src={`https://image.tmdb.org/t/p/w500${img}`} 
                    alt={`${name}`}/>
                    <div className="info">
                        {media === "tv" ?
                            <>
                                <h3>{name}</h3>
                                <div>
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Rating name="half-rating-read" value={vote / 2} precision={0.5} readOnly />
                                    </Box>
                                </div>
                                <p>{overview}</p>
                                <p>Seasons: {seasons}</p>
                                <p>Episodes: {episodes}</p>
                                <p>Runtime: {runtime} min.</p>
                                <p>Genres:
                        {genres && genres.map((genre, i) => {
                                    return (
                                        <span key={i}> {genre.name} </span>
                                    )
                                }
                                )
                                    }
                                </p>
                                <p>Pruduction:
                        {production && production.map((production, i) => {
                                    return (
                                        <span key={i}> {production.name} </span>
                                    )
                                })}</p>

                                <div className="container-icons">
                                    <>
                                        {externalLink && 'imdb_id' &&
                                            <a
                                                href={`https://www.imdb.com/title/${externalLink.imdb_id}`}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <Imdb className="icon" />
                                            </a>}
                                        {externalLink && 'facebook_id' &&
                                            <a
                                                href={`https://www.facebook.com/${externalLink.facebook_id}`}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <FacebookSquare className="icon" /></a>}
                                        {externalLink && 'twitter_id' &&
                                            <a
                                                href={`https://www.twitter.com/${externalLink.twitter_id}`}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <Twitter className="icon" />
                                            </a>}
                                        {externalLink && 'instagram_id' &&
                                            <a
                                                href={`https://www.instagram.com/${externalLink.instagram_id}`}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <Instagram className="icon" />
                                            </a>}
                                    </>
                                </div>
                            </>
                            :
                            <>
                                <h3>{name}</h3>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating name="half-rating-read" value={vote / 2} precision={0.5} readOnly />
                                </Box>
                                <p>{overview}</p>
                                <p>Released: {released} </p>
                                <p>Runtime: {runtimemovies} min.</p>
                                <p>Genres:
                        {genres && genres.map((genre, i) => {
                                    return (
                                        <span key={genre.name}> {genre.name} </span>
                                    )
                                }
                                )
                                    }
                                </p>
                                <p>Budget: ${budget}</p>
                                <p>Revenue: ${revenue}</p>
                                <p>Pruduction:
                        {production && production.map((production, i) => {
                                    return (
                                        <span key={i}> {production.name} </span>
                                    )
                                })}</p>
                                <div className="container-icons">
                                    <>
                                        {externalLink && 'imdb_id' &&
                                            <a
                                                href={`https://www.imdb.com/title/${externalLink.imdb_id}`}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <Imdb className="icon" />
                                            </a>}
                                        {externalLink && 'facebook_id' &&
                                            <a
                                                href={`https://www.facebook.com/${externalLink.facebook_id}`}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <FacebookSquare className="icon" />
                                            </a>}
                                        {externalLink && 'twitter_id' &&
                                            <a
                                                href={`https://www.twitter.com/${externalLink.twitter_id}`}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <Twitter className="icon" />
                                            </a>}
                                        {externalLink && 'instagram_id' &&
                                            <a
                                                href={`https://www.instagram.com/${externalLink.instagram_id}`}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <Instagram className="icon" />
                                            </a>}
                                    </>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div>
                </div>
            </OverviewStyled>
        </>
    )
}

export default Overview