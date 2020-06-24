import React, { useState } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import { useParams, useHistory } from 'react-router-dom';
import Card from './Card'
import Pagination from './Pagination';
import API_URL from '../assets/constants';
import notAvailable from '../assets/img-not-available.png'

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
            width:20px;
            height: 20px;
        }
        :focus{
            width:20px;
            height: 20px;
        }
        }
    }
    .icon{
        width: 15px;
        margin: 0;
        :hover{
            width:20px;
            height: 20px;
        }
        
    }
}
`

const SearchSection = () => {
    const params = useParams()
    const history = useHistory()
    let [page, setPage] = useState(1)
    const busqueda = useFetch(`
    ${API_URL}search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${params.busqueda}&page=${page}&include_adult=true`)


    return (
        <SearchSectionStyled>
            {busqueda && busqueda.results.map((result) => {
                return (
                    <Card
                        img={result.poster_path !== undefined && result.poster_path !== null ?
                            `https://image.tmdb.org/t/p/w500${result.poster_path}` :
                            `${notAvailable}`}
                        name={result.title ? result.title : result.original_name}
                        media={result.media_type}
                        id={result.id}>
                    </Card>
                )

            })}
            <Pagination
                sectionPagination={busqueda}
                params={params}
                page={page}
                setPage={setPage}
                history={history}
                variableRuteo={"busqueda"}>
            </Pagination>
        </SearchSectionStyled>
    )

}

export default SearchSection