const NPS = {
    getParks: (searchText) => {
        const API = `https://developer.nps.gov/api/v1/parks?q=${searchText}&api_key=cdgjmt09KDFy4NRLi7OqQ02jhN37uSne53dnzURZ`;
        return fetch(API).then(response => 
            response.json()
        );  
    }
};

export default NPS;