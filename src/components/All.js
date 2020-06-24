import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import CardSection from './CardSection';
import useFetch from '../hooks/useFetch';
import Pagination from './Pagination';
import API_URL from '../assets/constants'
import notAvailable from '../assets/img-not-available.png'

const AllStyled = styled.section`
h3{
    font-size: 32px;
    font-weight: 300;
    margin: 45px 15px;
}
@media(max-width: 910px){
    h3{
        font-size: 20px;
        text-align: center
    }
}

.button-section{
    display: flex;
    justify-content: center;
    button{
    background: none;
    border: 1px solid rgb(54, 57, 63);
    outline: rgb(54, 57, 63);
    color: rgb(220, 221, 222);
    width: 40px;
    height: 40px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 100%;
    margin: 3px;
    transition: all 0.2s ease 0s;
    :hover{
        background-color: rgb(168, 170, 173);
    }
    :focus{
        background-color: rgb(168, 170, 173);
    }
    }
}
.icon{
    margin-top: 20px;
    color: #2196f3;
    width: 30px;
    margin: 0;
    color: rgb(220, 221, 222);
    cursor: pointer;
    :hover{
        width: 40px;
        border-radius: 48%;
        background-color: rgb(168, 170, 173);
        
    }
    :focus{
        background-color: rgb(168, 170, 173);
    }
}



@media(max-width: 910px){
    .button-section{
        button{
        width: 20px;
        :hover{
            width: 20px;
            height: 20px;
        }
        }
    }
    .icon{
        width: 15px;
        margin: 0;
        :hover{
            width: 20px;
            height: 20px;
        }
    }
}

`
const All = ({ title, link }) => {
    const params = useParams();
    let [page, setPage] = useState(1)
    const history = useHistory();
    let mediaObject = ''
    let mediaTitle = ''
    if (params && params.media) {
        const urlPosibles = {
            tv: {
                popular: {
                    link: `${API_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                    title: `Popular TV Shows`
                },
                top_rated: {
                    link: `${API_URL}tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                    title: "Top Rated TV Shows"
                },
                on_the_air: {
                    link: `${API_URL}tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                    title: "On The Air TV Shows"
                },
                airing_today: {
                    link: `${API_URL}tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                    title: "Airing Today TV Shows"
                },
                trending: {
                    link: `${API_URL}trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                    title: "Trending TV Shows"
                },
            },
            movie: {
                popular: {
                    link: `${API_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                    title: "Popular Movies"
                },
                top_rated: {
                    link: `${API_URL}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                    title: "Top Rated Movies"
                },
                upcoming: {
                    link: `${API_URL}movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                    title: "Upcoming Movies"
                },
                now_playing: {
                    link: `${API_URL}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                    title: "Now Playing Movies"
                },
                trending: {
                    link: `${API_URL}trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                    title: "Trending Movies"
                }
            },
        }
        mediaObject = urlPosibles[params.media][params.categoria].link
        mediaTitle = urlPosibles[params.media][params.categoria].title
    }

    const allMedia = useFetch(mediaObject)

    return (

        <>
            <AllStyled>
                <h3>{title}</h3>
                <CardSection
                    info={allMedia && allMedia.results}
                    titleall={mediaTitle}
                    cardnumber={allMedia && allMedia.results && allMedia.results.length}
                    link={`${link}`}
                    media={params.media}></CardSection>
                <div className="button-section">
                    <Pagination
                        sectionPagination={allMedia}
                        params={params}
                        page={page}
                        setPage={setPage}
                        history={history}
                        variableRuteo={"all"}></Pagination>
                </div>
            </AllStyled>
        </>
    )
}
export default All;