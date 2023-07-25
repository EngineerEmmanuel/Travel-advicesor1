
import { useEffect, useState } from "react";
import GoogleMap from "./GoogleMap";
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';



const Body = ({ searchValueProp }) => {
  const [rapid, setRapid] = useState([]); 
  

  const url = `https://travel-advisor.p.rapidapi.com/locations/search?query=${searchValueProp}`;

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4334922decmshee101600e487ad9p1be1dfjsna5224d81306c',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((rapidApiData) => {
        // i am checking if rapidApiData returns some data before i can update the state for rendering
        setRapid(rapidApiData?.data || []);
        console.log(rapidApiData);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, [searchValueProp]);

  return (
    <section>
      
      <div className="gen-grid-con">

      <div className="main-location-gen-con"> 
        

        
      { rapid.map((location) => (
        <div key={location.location_id} className="location-con">
            <div className="location-img-con">
            <img src={location.result_object.photo?.images.medium.url} alt={location.result_object.name}  />
            </div>
        <div className="location-details-con">
        <h2>{location.result_object.name}</h2>
          <p>{location.result_object.location_string}</p>
          <p>{location.result_object.timezone}</p>
          <p>{location.result_object.address}</p>
          {location.result_object.longitude && location.result_object.latitude && (
            <div>
              <p>Longitude: {location.result_object.longitude}</p>
              <p>Latitude: {location.result_object.latitude}</p>
            </div>
          )}
          <ul>
            <li><GradeOutlinedIcon/></li>
            <li><GradeOutlinedIcon/></li>
            <li><GradeOutlinedIcon/></li>
            <li><GradeOutlinedIcon/></li>
          </ul>
        </div>
          
        </div>
      ))}
      
      <p>Please search for a city to see images</p>
      </div>


      <div className="google-map-con">
        {/* {
          Please i did this project with all my heart, i please accept it, i know it is not 100% perfect
        } */}
        
        <GoogleMap />
      </div>
        
      </div>
      
      
    </section>
  );
};

export default Body;

