import React from "react";
import fetchFlights from "../fetchData/fetch_flights";
import fetchDestinations from "../fetchData/fetch_destinations";


function filterDestinations(event) {
    const query = event.target.value;
    console.log(fetchDestinations.filter((destination) => destination.cityName.toLowerCase().includes(query.toLowerCase())));
    return fetchDestinations.filter((destination) => destination.cityName.toLowerCase().includes(query.toLowerCase()));
}
export default function Flights(){
    return(
        <>
       
        <input type="search" placeholder="search for destination" id="input" onChange={filterDestinations}></input>
        <select label="select button">
            <option value = "value" label="Israel"/>
            <option value = "value" label="New York"/>
            <option value = "value" label="London"/>
        </select>
        <input type="date" select check In></input>
        <input type="date" select check out></input>


   





        </>

    );
}

//filters:
//company name, 
//empty seats,
//destination,
//departure
//date of departure
//date of arrival