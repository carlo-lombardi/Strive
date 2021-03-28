import React, { useEffect, useState } from "react"
import axios from "./axios"
import requests from "./request"

const base_Url = "https://image.tmdb.org/t/p/original/"
function Banner(){
  const [ movies, setMovie ] = useState([])

  useEffect(() =>{

    
    async function fetchData(){

      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length -1)
        ]
      )
      return request
    
    } 
    fetchData()

  }, [])
 console.log(movies);

 return(
   <header
    className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url(${base_Url}${movies?.backdrop_path})`,
      backgroundPosition: "center center",
    }}
    >
     <div className="banner_contents">
      <h1> {movies?.title || movies?.name || movies?.original_name}</h1>
     </div>

   </header>
 )
}

export default Banner