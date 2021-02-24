import React from 'react'

function Search(props) {
    const {myChange} = props
    return (
        <div>
            <input onChange={myChange} type="text" placeholder="Search by food name"/>
        </div>
    )
}

export default Search
