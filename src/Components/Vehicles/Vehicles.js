import React from 'react';
import { Link } from 'react-router-dom';
import './vehicles.css'
const Vehicles = (props) => {
    const {id,name,img}=props.vehicle
    return (
        <div className="col text-center">
            <div className="card cardImage">
                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body">
                  <Link to="/destination"> <h5 className="card-title">{name}</h5> </Link>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;