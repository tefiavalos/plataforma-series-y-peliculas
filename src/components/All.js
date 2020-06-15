import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import CardSection from './CardSection';
import useFetch from '../hooks/useFetch';
import { ArrowRight } from "@styled-icons/feather/ArrowRight";
import { ArrowLeft } from "@styled-icons/feather/ArrowLeft";

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
        // ಠ_ಠ
    console.log(params)
    let urlFetch = ''
    if (params && params.media) {
        const urlPosibles = {
            tv: {
                popular: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                top_rated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                on_the_air: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                airing_today: `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                trending: `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
            },
            movie: {
                popular: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                now_playing: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
                trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
            },
        }
        const mediaObject = urlPosibles[params.media]
        urlFetch = mediaObject[params.categoria]

    }
    const allMedia = useFetch(urlFetch);

      // Esta bien usado este if/else, aunque la ultima convencion en React es usar un objeto para estos casos. 
  // Podes leer sobre el tema aqui: 
  // https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals


    let titleSecond = params.media == "tv" ? "TV Shows" : "Movies";
    let titleFirst = ""
    //los titulos van a estar en el objeto
    if (params.categoria == "popular") {
        titleFirst = "Popular"
    }
    else if (params.categoria == "top_rated") {
        titleFirst = "Top Rated"
    }
    else if (params.categoria == "on_the_air") {
        titleFirst = "On The Air"
    }
    else if (params.categoria == "airing_today") {
        titleFirst = "Airing Today"
    }
    else if (params.categoria == "trending") {
        titleFirst = "Trending"
    }
    else if (params.categoria == "upcoming") {
        titleFirst = "Up Coming"
    }
    else if (params.categoria == "now_playing") {
        titleFirst = "Now Playing"
    }



    const cacapis = () => {
        let paginacion = []
        for (let i = 1; i <= allMedia.total_pages; i++) {
            paginacion.push(i)
        }
        return paginacion
    }
        // ಠ_ಠ
    console.log(allMedia && allMedia.total_pages)
    const handleClick = (e) => {
        setPage(Number(e.target.value))
        history.push(`/${params.media}/category/${params.categoria}/page/${Number(e.target.value)}`)
    }

    const handleClickArrowRight = () => {
        setPage(Number(page + 1))
        history.push(`/${params.media}/category/${params.categoria}/page/${Number(page + 1)}`)
    }

    const handleClickArrowLeft = () => {
        setPage(Number(page - 1))
        history.push(`/${params.media}/category/${params.categoria}/page/${Number(page - 1)}`)
    }

    // ಠ_ಠ
    console.log(page)

    const paginas = allMedia && allMedia.total_pages && cacapis();
    return (

        <>
            <AllStyled>
                <h3>{title}</h3>
                <CardSection
                    info={allMedia && allMedia.results}
                    titleall={titleFirst + " " + titleSecond}
                    cardnumber={allMedia && allMedia.results && allMedia.results.length}
                    link={`${link}`}
                    media={params.media}></CardSection>
                <div className="button-section">
                    <ArrowLeft onClick={handleClickArrowLeft} className="icon"></ArrowLeft>
                    {paginas && paginas.map((pag, i) => {
                        if (i < 5) {
                            return (
                                <button value={pag} onClick={handleClick}>{pag}</button>
                            )
                        }
                    })}

                    {paginas && paginas.length > 5 && <button>...</button>}
                    {paginas && paginas.length > 5 && <button onClick={handleClick} value={paginas && paginas.length}>{paginas.length}</button>}
                    <ArrowRight onClick={handleClickArrowRight} className="icon"></ArrowRight>
                </div>
            </AllStyled>
        </>
    )
}
export default All;
