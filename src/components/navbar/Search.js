import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom';
import { searched } from '../../features/search/searchSlice';

const Search = () => {
    const { search } = useSelector(state => state.search);
    const dispatch = useDispatch();
    const [input, setInput] = useState(search);
    const match = useMatch('/');
    const navigate = useNavigate();
    const handleSearchFilter = (e) => {
        e.preventDefault();
        dispatch(searched(input));
        if (!match) {
            navigate('/')
        }
    };
    return (

        <form onSubmit={handleSearchFilter}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    )
}

export default Search