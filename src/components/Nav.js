import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Home } from '@styled-icons/feather/Home'
import { Video } from '@styled-icons/feather/Video'
import { Tv } from '@styled-icons/feather/Tv'
import { Search } from '@styled-icons/feather/Search'
import SearchSection from './SearchSection'
import useFetch from '../hooks/useFetch';
import { Imdb } from "styled-icons/fa-brands/Imdb";
import { FacebookSquare } from "@styled-icons/fa-brands/FacebookSquare";
import { Twitter } from "@styled-icons/fa-brands/Twitter";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { Link } from "@ArrowRightstyled-icons/fa-solid/Link";


const NavStyled = styled.nav`
display: flex;
justify-content: flex-start;
width: 100%;
padding: 1% 0;
background-color: black;
.container-icons{
    width: 40%;
    display:flex;
    justify-content: space-around;
    .home, .movies, .tv, .search{
        color:white;
        width: 35px;
    }
    input{
        width:300px;
        font-size: 20px;
    color: rgb(220, 221, 222);
    cursor: pointer;
    background: transparent;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    padding: 10px 20px 5px 40px;
}
    }
}
`

const SearchInput = styled.input``

const Nav = () => {
    const params = useParams()
    const history = useHistory();
    const [formSearch, setFormSearch] = useState('');
    const busqueda = useFetch(`
    https://api.themoviedb.org/3/search/multi?api_key=219be100a89ca386f6d06ac96e56548e&language=en-US&query=${formSearch}&page=1&include_adult=true`)


    const handleChange = (e) => {
        setFormSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?=${formSearch}`);
        setFormSearch('')
    }
    
  
    console.log(busqueda)
    console.log(formSearch)

    return (
        <NavStyled>
            <div className="container-icons">
            <Link className='home' to='/'><Home /></Link>
            <Link className='movies' to='/movie'><Video /></Link>
            <Link className='tv' to='/tv'><Tv /></Link>
            <Search className="search"/>
                <form onSubmit={handleSubmit}>
                
                <input
                    type="text"
                    placeholder="Search for a movie or tv shows"
                    onChange={handleChange}
                    value={formSearch}
                />
        </form>
        </div>
        </NavStyled>

    )
}

export default Nav