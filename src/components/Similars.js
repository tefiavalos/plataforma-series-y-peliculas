import React, { useState } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Card from './Card';
import Pagination from './Pagination';
import API_URL from '../assets/constants';

const SimilarsStyled = styled.article`
.section-cards{
display: flex;
justify-content: space-around;
flex-wrap: wrap;
}
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
        width: 20px;
        height: 20px;
        }
        :focus{
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
        :focus{
            width: 20px;
            height: 20px;
            }
        
    }
}
`

const Similars = () => {
    const params = useParams()
    let [page, setPage] = useState(1)
    const similars = useFetch(`
    ${API_URL}${[params.media]}/${[params.id]}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)



    return (
        <SimilarsStyled>
            <div className="section-cards">
                {similars && similars.results && similars.results.map((similar) => {
                    return (
                        <Card
                            img={`https://image.tmdb.org/t/p/w500${similar.poster_path}`} //y si no hay?
                            titlemedia={similar.title ? similar.title : similar.original_name}
                            media={params.media}
                            id={similar.id}
                        />
                    )
                })}
            </div>
            <Pagination
                sectionPagination={similars}
                params={params}
                page={page}
                setPage={setPage}
                variableRuteo={"similars"}></Pagination>
        </SimilarsStyled>
    )
}

export default Similars