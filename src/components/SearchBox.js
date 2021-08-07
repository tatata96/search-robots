import React from 'react';


const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={searchChange}></input>
        </div>
    );

}
//every time searcbox is changed we will call the searchChange function in App.js
//communicates with  App (parent)

export default SearchBox;