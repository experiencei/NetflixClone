import React, {useState , useEffect} from 'react';
import "./Banner.css";
import axios from '../axios/axios';
import requests from '../netflix/requests';

function Banner() {
    const [ movie , setMovie] = useState([]);
       useEffect(() => {
          async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
           setMovie(request.data.results[
               Math.floor(Math.random() * request.data.results.length)
           ])
           return request
          }
           fetchData();
       }, [])
    return (
        <header className="banner" 
        style={{
            backgroundSize : "cover",
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition : "center center"
        }}>
           <div className="banner__contents">
            <h1>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
           </div>
        </header>
    )
}

export default Banner
