import React from 'react'

const Search = (props) => {
    const {onChangehandler, search} = props;
    return (
        <div className="col-sm-6 mx-auto my-3">
            <input type='search' name="search" className="form-control" placeholder="Enter username to search"
            onChange={onChangehandler} value={search}></input>
        </div>
    )
}

export default Search

