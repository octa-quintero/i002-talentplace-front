import React, { useState } from 'react';    
import Dropdown from '../Dropdown/Dropdown'
import { BiSearch } from 'react-icons/bi'
import '../../index.css'
import './Search.css'

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (

        <div className="d-flex justify-content-between container-search">
            <div className='w-100'>
                <div id="search-input">
                    <div className="input-group col-md-12">
                        <input 
                            className="search-query form-control" 
                                type="text"
                                value={searchTerm}
                                onChange={handleInputChange}
                                placeholder="Buscar proyectos..."
                        />
                        <button id="btn-search" type="button">
                            <BiSearch className='ri-bisearch' />
                        </button>
                    </div>
                </div>
            </div>
            <Dropdown classForSearch="classForSearch" />
        </div>
        
    );
};

export default Search;
