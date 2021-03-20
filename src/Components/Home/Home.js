import React, { useEffect, useState } from 'react';
import vehicleData from '../../fakeData/rideData.json';
import Vehicles from '../Vehicles/Vehicles';
import './home.css'
const Home = () => {
    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        setVehicle(vehicleData)
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-4 g-5 background ">
            {
                vehicle.map(vehicle=> <Vehicles vehicle={vehicle} key={vehicle.id}></Vehicles>)
            }
        </div>
    );
};

export default Home;
