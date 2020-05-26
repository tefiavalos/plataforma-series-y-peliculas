import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Home } from '@styled-icons/feather/Home'
import { Video } from '@styled-icons/feather/Video'
import { Tv } from '@styled-icons/feather/Tv'
import { Search } from '@styled-icons/feather/Search'
import SearchSection from './SearchSection'
import useFetch from '../hooks/useFetch';


const NavStyled = styled.nav`
display: flex;
justify-content: space-around;
width: 100%;
padding: 2% 0;
background-color: black;
.home, .movies, .tv, .search{
    color:white;
    width: 30px;

}
`

const SearchInput = styled.input``

const Nav = () => {
    const params = useParams()
    console.log(params)
    const history = useHistory();
    const [formSearch, setFormSearch] = useState('');
    const busqueda = useFetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${formSearch}&page=1&include_adult=true`)
    

    const handleChange = (e) => {
        setFormSearch(e.target.value);
    }
    let [url, setUrl] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl = history.push(`/search?=${formSearch}`);
        setFormSearch('')
    }
    
  
    console.log(busqueda)
    console.log(formSearch)

    return (
        <NavStyled>
            <Link className='home' to='/'><Home /></Link>
            <Link className='movies' to='/movie'><Video /></Link>
            <Link className='tv' to='/tv'><Tv /></Link>
            <Link className="search" to="/search"><Search /></Link>
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for a movie or tv shows"
                    onChange={handleChange}
                    value={formSearch}
                />
        </form>
        
        </NavStyled>

    )
}

export default Nav