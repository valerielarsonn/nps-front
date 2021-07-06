import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NPS from "../Services/NPS";
import Search from "../components/Search";

import "../styles.scss";

const Home = (props) => {
    const [parks, setParks] = useState([]);
    const [searchText, setSearchText] = useState("");
        useEffect(() => {
            NPS.getParks(searchText).then(parks => {
                console.log(parks);
                setParks(parks.data);
            })
        }, [searchText])

        return (
            <div className="App">
                <h1>Search for National Parks</h1>
                <Search
                    setSearchText={setSearchText}
                />
                {parks.map((park) => 
                <Link to={`/parks/${park.id}`}>{park.name}</Link>
                )}
            </div>
        );
};



export default Home;