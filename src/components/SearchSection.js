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
`

const SearchSection = () => {
    const params = useParams()
    console.log(params, "Params")
    let [page, setPage] = useState([1])
    const busqueda = useFetch(`
    https://api.themoviedb.org/3/search/multi?api_key=219be100a89ca386f6d06ac96e56548e&language=en-US&query=${params.busqueda}&page=${page}&include_adult=true`)
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
        
    }

    const handleClickArrowRight = () =>{
        setPage(page++)
    }

    const handleClickArrowLeft = () =>{
        setPage(page--)
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
            name={result.title}
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
                {paginas && paginas.length > 5 && <button>{paginas.length}</button>}
                <ArrowRight onClick={handleClickArrowRight} className="icon"></ArrowRight>
                </div>
         </SearchSectionStyled>
        )
       
}

export default SearchSection