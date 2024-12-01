const express = require('express');

const app = express();


const ships = [
    {
        id: 1,
        name: "Luxury Yacht",
        description: "A luxury yacht with modern amenities.",
        price: 1500000,
        tonnage: 500,
        passengers: 10,
        image: "../img/luxury_yacht.jpg",
    },
    {
        id: 2,
        name: "Fishing Vessel",
        description: "A sturdy vessel designed for deep-sea fishing.",
        price: 75000,
        tonnage: 50,
        passengers: 6,
        image: "../img/fishing_vessel.jpg",
    },
    {
        id: 3,
        name: "Cargo Ship",
        description: "Large cargo ship for transporting goods globally.",
        price: 5000000,
        tonnage: 20000,
        passengers: 20,
        image: "../img/cargo_ship.jpg",
    },
    {
        id: 4,
        name: "Speedboat",
        description: "Fast and nimble, perfect for quick trips.",
        price: 25000,
        tonnage: 2,
        passengers: 4,
        image: "../img/speed_boat.jpg",
    },
    {
        id: 5,
        name: "Sailing Ship",
        description: "A classic sailing ship with beautiful design.",
        price: 120000,
        tonnage: 100,
        passengers: 15,
        image: "../img/sailing_ship.jpg",
    },
    {
        id: 6,
        name: "Cruise Ship",
        description: "A massive cruise ship for oceanic voyages.",
        price: 7000000,
        tonnage: 30000,
        passengers: 3000,
        image: "../img/cruise_ship.jpg",
    },
    {
        id: 7,
        name: "Patrol Boat",
        description: "A patrol boat used for coastal surveillance.",
        price: 90000,
        tonnage: 30,
        passengers: 12,
        image: "../img/patrol_boat.jpg",
    },
    {
        id: 8,
        name: "Research Vessel",
        description: "A ship equipped for scientific research.",
        price: 200000,
        tonnage: 100,
        passengers: 30,
        image: "../img/research_boat.jpg",
    },
    {
        id: 9,
        name: "Tugboat",
        description: "A powerful tugboat for maneuvering large vessels.",
        price: 85000,
        tonnage: 25,
        passengers: 5,
        image: "../img/tugboat.jpg",
    },
    {
        id: 10,
        name: "Submarine",
        description: "A small submarine for underwater exploration.",
        price: 500000,
        tonnage: 50,
        passengers: 8,
        image: "../img/submarine.jpg",
    },
];

const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.get('/api/ships', (req, res) => {
    const { search, price, tonnage, passengers } = req.query;

    let filteredShips = ships;

    if (search) {
        filteredShips = filteredShips.filter(ship =>
            ship.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (price) {
        if (price === '100000') {
            filteredShips = filteredShips.filter(ship => ship.price <= 100000);
        } else if (price === '1000000') {
            filteredShips = filteredShips.filter(ship => ship.price > 100000 && ship.price <= 1000000);
        } else if (price === '1000000+') {
            filteredShips = filteredShips.filter(ship => ship.price > 1000000);
        }
    }

    if (tonnage) {
        if (tonnage === '500') {
            filteredShips = filteredShips.filter(ship => ship.tonnage <= 500);
        } else if (tonnage === '10000') {
            filteredShips = filteredShips.filter(ship => ship.tonnage > 500 && ship.tonnage <= 10000);
        } else if (tonnage === '10000+') {
            filteredShips = filteredShips.filter(ship => ship.tonnage > 10000);
        }
    }

    if (passengers) {
        if (passengers === '10') {
            filteredShips = filteredShips.filter(ship => ship.passengers <= 10);
        } else if (passengers === '100') {
            filteredShips = filteredShips.filter(ship => ship.passengers > 10 && ship.passengers <= 100);
        } else if (passengers === '100+') {
            filteredShips = filteredShips.filter(ship => ship.passengers > 100);
        }
    }

    res.json(filteredShips);
});



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
