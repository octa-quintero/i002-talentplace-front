import React from 'react'
import '../../index.css'
import './Search.css'
import { BiSearch } from 'react-icons/bi'
import Dropdown from '../Dropdown/Dropdown'

const Search = () => {

    return (
            <div className="d-flex justify-content-between container-search">
                <div className='w-100'>
                    <div id="search-input">
                        <div className="input-group col-md-12">
                            <input type="text" className="search-query form-control" placeholder="Buscar" />
                                <button id="btn-search" type="button">
                                    <BiSearch className='ri-bisearch' />
                                </button>
                        </div>
                    </div>
                </div>
                <Dropdown classForSearch="classForSearch" />
            </div>
    )
}

export default Search