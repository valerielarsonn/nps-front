import React from "react";

const Search = (props) => {

    return (
        <input
        key="random"
        // value={searchText}
        placeholder={"search national park"}
        onChange={(e) => props.setSearchText(e.target.value)}
        // <Button onClick={}>Submit</Button>
        />

    );
}

export default Search;