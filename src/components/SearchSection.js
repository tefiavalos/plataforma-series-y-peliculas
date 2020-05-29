import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import { Link, useParams, useHistory } from 'react-router-dom';
import Card from './Card'
import { ArrowRight } from "@styled-icons/feather/ArrowRight"
import { ArrowLeft } from "@styled-icons/feather/ArrowLeft"

const SearchSectionStyled = styled.article`
display:flex;
flex-wrap: wrap;
justify-content: space-around;
.button-section{
    display: flex;
    justify-content: center;
    button{
    background: none;
    border: 1px solid rgb(54, 57, 63);
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
    }
}
.icon{
    margin-top: 20px;
    color: #2196f3;
    width: 30px;
    margin: 0;
    color: rgb(220, 221, 222);
    cursor: pointer;
}

@media(max-width: 910px){
    .button-section{
        button{
        width: 20px;
        }
    }
    .icon{
        width: 15px;
        margin: 0;
        
    }
}
`

const SearchSection = () => {
    const params = useParams()
    const history = useHistory()
    console.log(params, "Params")
    let [page, setPage] = useState(1)
    const busqueda = useFetch(`
    https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${params.busqueda}&page=${page}&include_adult=true`)
    console.log(busqueda)


    const cacapis = () => {
        let paginacion = []
        for (let i = 1; i <= busqueda.total_pages; i++) {
            paginacion.push(i)
        }
        return paginacion
    }
    console.log(busqueda && busqueda.total_pages)
    const handleClick = (e) => {
        setPage(Number(e.target.value))
        history.push(`/search/${params.busqueda}/page/${Number(e.target.value)}`)
        
    }

    const handleClickArrowRight = () =>{
        setPage(Number(page+1))
        history.push(`/search/${params.busqueda}/page/${page+1}`)
    }

    const handleClickArrowLeft = () =>{
        setPage(Number(page-1))
        history.push(`/search/${params.busqueda}/page/${page-1}`)
    }
//tengo que apretar dos veces para que cambie
    
    console.log(page)

    const paginas = busqueda && busqueda.total_pages && cacapis();
    return (
        <SearchSectionStyled>
        {busqueda && busqueda.results.map((result) =>{
            return(
            <Card
            img={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
            name={result.title ? result.title : result.original_name}
            media={result.media_type}
            id={result.id}>
            </Card>
            )
            
        })}
          <div className="button-section">
                    <ArrowLeft onClick={handleClickArrowLeft} className="icon"></ArrowLeft>
                 {paginas && paginas.map((pag, i) => {
                     if(i < 5){
                    return (
                        <button value={pag} onClick={handleClick}>{pag}</button>
                    )}
                })} 
                
                {paginas && paginas.length > 5 && <button>...</button>}
                {paginas && paginas.length > 5 && <button value={paginas && paginas.length} onClick={handleClick}>{paginas.length}</button>}
                <ArrowRight onClick={handleClickArrowRight} value={paginas && paginas.length} className="icon"></ArrowRight>
                </div>
         </SearchSectionStyled>
        )
       
}

export default SearchSection