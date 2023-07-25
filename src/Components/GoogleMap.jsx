
import {Map,GoogleApiWrapper,useGoogleMap} from "google-maps-react";
import { useEffect, useState } from "react";

const GoogleMap = (props) => {
    // const google = " hfhf";
    const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // This function gets user`s current browser location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
    useEffect(()=>{
        
        getLocation()
    }, [])
    return ( 
        <section style={{width:"100%", overflowX:"hidden"}}>
          {/* i am basically trying to change the location of the map to the user`s current browser location. I am doing this conditionaly. I the longitude and latitude of the user current browser location is true, i will then render the use location the map, else, i will show them this message "Please allow the application to have access to your location, in other to enjoy the full functionality of the application" */}
          {
            latitude && longitude ? 
            (<Map
              google = {props.google}
              style={{width:"100%", height:"100%"}}
              zoom={14}
              initialCenter={
                  {
                      lat:latitude,
                      lng:longitude
                  }
              }
              />)
              :"Please allow the application to have access to your location, in other to enjoy the full functionality of the application"
            
          }
          
        </section>
     );
}
 
export default GoogleApiWrapper({
    apiKey:"AIzaSyBDIyHhJjj8sKJuuetnvY0WIEdXC2kNn-8"
}) (GoogleMap);