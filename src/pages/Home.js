
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NPS from "../Services/NPS";

const Home = (props) => {

    const [parks, setParks] = useState([]);
        useEffect(() => {
            NPS.getParks("acadia").then(parks => {
                console.log(parks);
                setParks(parks.data);
            })
        }, [])

        return parks.map((park) => 
            <Link to={`/park/${park.id}`}>{park.name}</Link>
        );
};



export default Home;