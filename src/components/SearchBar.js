import React, {useState} from 'react'
import { UilLocationPoint, UilSearch } from '@iconscout/react-unicons'
import { toast } from "react-toastify";

function SearchBar(props) {

  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (props.units !== selectedUnit) props.setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") props.setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        props.setQuery({
          lat,
          lon,
        });
      });
    }
  };


  return (
    <div className='flex flex-row justify-center my-6'>

        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
                <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleSearchClick}/>
                <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"  onClick={handleLocationClick}/>
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
            <button name='metric' className='text-xl text-white font-light' onClick={handleUnitsChange}>&deg;C</button>
            <p className='text-xl text-white mx-2'>|</p>
            <button name='imperial' className='text-xl text-white font-light' onClick={handleUnitsChange}>&deg;F</button>
        </div>
    </div>
  )
}

export default SearchBar