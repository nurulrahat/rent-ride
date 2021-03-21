import React, { useEffect, useState } from 'react';
import './destination.css'
import map from '../../images/Map.png';
import { useParams } from 'react-router';
import vehicleData from '../../fakeData/rideData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Destination = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        setVehicle(vehicleData)
    }, [])
    let location;
    const [place, setPlace] = useState(false);
    const [inputLocation, setInputLocation] = useState({
        from: '',
        to: '',
        img: ''
    })
    const handleChange = event => {
        const fromInfo = event.target.value;

        if (event.target.name === 'fromPlace') {
            location = false;
            const newLocInfo = { ...inputLocation }
            newLocInfo.from = event.target.value
            setInputLocation(newLocInfo)
        }
        if (event.target.name === 'toPlace') {
            location = true;
            const newLocInfo = { ...inputLocation }
            newLocInfo.to = event.target.value
            setInputLocation(newLocInfo)
        }
        console.log(location)
    }
    const handleSetLocation = () => {
        setPlace(true);
    }
    console.log(inputLocation)
    console.log(place)
    const mapStyle = {
        width: "500px", height: "400px", style: "border:0;", allowfullscreen: "", loading: "lazy"
    }

    return (
        <div className="container">
            <div className="row g-4 justify-content-md-center">
                <div className="col-md-3">
                    {place ? <div className="viewLocCls">
                        <h4>
                            From: {inputLocation.from}
                        </h4>
                        <h4>
                            To: {inputLocation.to}
                        </h4>


                    </div>
                        : <form action="" className="formCls">
                            <label htmlFor="fromPlace"> Pick from</label>
                            <input type="text" name="fromPlace" id="fromLoc" required placeholder="From"
                                onBlur={handleChange} />
                            <label htmlFor="toPlace">Drop To</label>
                            <input type="text" name="toPlace" id="toLoc" required placeholder="To"
                                onBlur={handleChange} />
                            <button onClick={handleSetLocation} type="button" className="btn btn-primary  mt-3">
                               <FontAwesomeIcon icon={faMapMarkerAlt} ></FontAwesomeIcon> Search </button>
                        </form>
                    }
                </div>
                <div className="col-md-6 me-5 ">
                    {/* <img className="h-50" src={map} alt="" /> */}
                    <p> {<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240928.64753992!2d89.8481026823956!3d22.711621060744623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616307114091!5m2!1sen!2sbd" style={mapStyle} ></iframe>}</p>
                </div>
            </div>
        </div>
    );
};

export default Destination;