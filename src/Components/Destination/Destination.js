import React, { useEffect, useState } from 'react';
import './destination.css'
import map from '../../images/Map.png';
import { useParams } from 'react-router';
import vehicleData from '../../fakeData/rideData.json';
const Destination = () => {
  const {id} = useParams();
  const [vehicle, setVehicle] = useState([]);
  useEffect(() => {
      setVehicle(vehicleData)
  }, [])
    let location;
    const [place,setPlace] =useState(false);
    const [inputLocation,setInputLocation] = useState({
        from:'',
        to:'',
        img:''
    })
    const handleChange = event => {
        const fromInfo = event.target.value;

        if (event.target.name === 'fromPlace') {
            location = false;
            const newLocInfo={...inputLocation}
            newLocInfo.from=event.target.value
            setInputLocation(newLocInfo)
        }
        if (event.target.name === 'toPlace') {
            location = true;
            const newLocInfo={...inputLocation}
            newLocInfo.to=event.target.value
            setInputLocation(newLocInfo)
        }
        console.log(location)
    }
    const handleSetLocation= ()=>{
        setPlace(true);
            }
console.log(inputLocation)
console.log(place)

    return (
        <div className="container">
            <div className="row g-4 justify-content-md-center">
                <div className="col-md-3">
                 {place?<div className="viewLocCls">
                    <h4>
                       From: {inputLocation.from}
                    </h4>
                    <h4>
                       To: {inputLocation.to}
                    </h4>
                    
                    
                 </div>
                  :<form action="" className="formCls">
                  <label htmlFor="fromPlace"> Pick from</label>
                  <input type="text" name="fromPlace" id="" required placeholder="From"
                      onBlur={handleChange} />
                  <label htmlFor="toPlace">Drop To</label>
                  <input type="text" name="toPlace" id="" required placeholder="To"
                      onBlur={handleChange} />
                  <button onClick={ handleSetLocation} type="button" className="btn btn-primary  mt-3">Search </button>
              </form>
                 }   
                </div>
                <div className="col-md-6 me-5 ">
                    <img className="h-50" src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;