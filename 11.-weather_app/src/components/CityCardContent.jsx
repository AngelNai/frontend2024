import PropTypes from "prop-types"
const CityCardContent=({weather})=>{
    return(
        <>
        <img src={`http:${weather.current.condition.icon}`}
 className="card-img-top" 
 alt="weather.current.condition.text"
 />
 <div className="card-body">
   <h5 className="card-title">{`${weather.location.name},${weather.location.region}-${weather.location.country}`}</h5> 
   <p className="card-text">{weather.current.condition.text}</p>
   <p className="card-text">
    <i className="bi bi-thermometer-low text-danger"></i>&nbsp;{`${weather.current.temp_c}°C`}&nbsp;&nbsp;
   <i className="bi bi-droplet-fill text-primary"></i>&nbsp;{`${weather.current.humidity}%`}&nbsp;&nbsp;
   <i className="bi bi-wind text-success"></i>&nbsp;{`${weather.current.wind_kph}°kph`}&nbsp;&nbsp;

   
   
   
   </p>
   

 </div>
        
        
        </>
    )
}
CityCardContent.propTypes={
  weather:PropTypes.object.isRequired
}

export default CityCardContent