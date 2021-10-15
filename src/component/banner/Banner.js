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
        <header>
            
        </header>
    )
}

export default Banner
