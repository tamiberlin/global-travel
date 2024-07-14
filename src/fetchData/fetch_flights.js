import React from "react";

// const fetchFlights = async () => {
//     try {
//       const response = await axios.get('https://api.example.com/flights'); // Replace with your actual API endpoint
//       const flights = response.data;
//       // Process the fetched flights data as needed
//       console.log(flights);
//     } catch (error) {
//       console.error('Error fetching flights:', error);
//     }
//   };
const fetchFlights = [
    {
        id: 112,
        departure: 3,
        destination: 4,
        departureDate: "2024-12-03",
        departureTime: "10:00 AM",
        arrivalTime: "12:30 PM",
        companyName: "El-Al",
        price: 500,
        fullSeats: 100,
        totalSeats: 100,
    },
    {
        id: 113,
        departure: 5,
        destination: 8,
        departureDate: "2024-12-04",
        departureTime: "09:00 AM",
        arrivalTime: "11:30 AM",
        companyName: "Delta Air Lines",
        price: 600,
        fullSeats: 80,
        totalSeats: 180,
    },
    {
        id: 114,
        departure: 1,
        destination: 2,
        departureDate: "2024-12-05",
        departureTime: "08:00 AM",
        arrivalTime: "10:30 AM",
        companyName: "American Airlines",
        price: 400,
        fullSeats: 120,
        totalSeats: 220,
    },
    {
        id: 115,
        departure: 9,
        destination: 7,
        departureDate: "2024-12-06",
        departureTime: "07:00 AM",
        arrivalTime: "09:30 AM",
        companyName: "AirAsia",
        price: 700,
        fullSeats: 60,
        totalSeats: 160,
    },
    {
        id: 116,
        departure: 7,
        destination: 5,
        departureDate: "2024-12-07",
        departureTime: "06:00 AM",
        arrivalTime: "08:30 AM",
        companyName: "Lufthansa",
        price: 800,
        fullSeats: 40,
        totalSeats: 140,
    },
    {
        id: 117,
        departure: 5,
        destination: 10,
        departureDate: "2024-12-08",
        departureTime: "05:00 AM",
        arrivalTime: "07:30 AM",
        companyName: "Air France",
        price: 900,
        fullSeats: 20,
        totalSeats: 120,
    },
    {
        id: 118,
        departure: 6,
        destination: 2,
        departureDate: "2024-12-09",
        departureTime: "04:00 AM",
        arrivalTime: "06:30 AM",
        companyName: "United Airlines",
        price: 1000,
        fullSeats: 10,
        totalSeats: 200,
    },
    {
        id: 119,
        departure: 4,
        destination: 3,
        departureDate: "2024-12-10",
        departureTime: "03:00 AM",
        arrivalTime: "05:30 AM",
        companyName: "American Airlines",
        price: 700,
        fullSeats: 5,
        totalSeats: 150,
    },
    {
        id: 120,
        departure: 1,
        destination: 2,
        departureDate: "2024-12-11",
        departureTime: "02:00 AM",
        arrivalTime: "04:30 AM",
        companyName: "AirAsia",
        price: 600,
        fullSeats: 3,
        totalSeats: 130,
    }
]

export default fetchFlights;