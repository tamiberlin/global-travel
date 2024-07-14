import React from 'react';

// const fetchDestinations = async () => {
//     try {
//       const response = await axios.get('https://api.example.com/flights'); // Replace with your actual API endpoint
//       const destinations = response.data;
//       // Process the fetched flights data as needed
//       console.log(destinations);
//     } catch (error) {
//       console.error('Error fetching flights:', error);
//     }
//   };

const fetchDestinations = [
    {
        id: 1,
        countryName: "Israel",
        cityName: "Tel-Aviv"
    },
    {
        id: 2,
        countryName: "United States",
        cityName: "New York"
    },
    {
        id: 3,
        countryName: "Canada",
        cityName: "Ottawa"
    },
    {
        id: 4,
        countryName: "Germany",
        cityName: "Berlin"
    },
    {
        id: 5,
        countryName: "France",
        cityName: "Paris"
    },
    {
        id: 6,
        countryName: "Japan",
        cityName: "Tokyo"
    },
    {
        id: 7,
        countryName: "India",
        cityName: "New Delhi"
    },
    {
        id: 8,
        countryName: "China",
        cityName: "Beijing"
    },
    {
        id: 9,
        countryName: "Russia",
        cityName: "Moscow"
    },
    {
        id: 10,
        countryName: "Spain",
        cityName: "Madrid"
    }
]
export default fetchDestinations;