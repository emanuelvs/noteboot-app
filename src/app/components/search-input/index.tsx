import React from 'react'

const SearchInput = ({onSearch}: any) => {

    

    return(
        <input 
            onChange={onSearch}
            type="search" 
            name="searchInput" 
            id="search-note" 
            placeholder="Search by title"/>
    )
}

export default SearchInput;