import React, { useEffect, useState } from 'react';
import vehicleData from '../../fakeData/rideData.json';
const Home = () => {
    const [vehicle,setVehicle] =useState([]);
    useEffect(()=> {
        setVehicle(vehicleData)
    },[])
    return (
        <div>
            <h1>This is home {vehicle[0].name}</h1>
        </div>
    );
};

export default Home;
useEffect(()=> {

},[])