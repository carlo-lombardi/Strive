import React, { useEffect, useState } from "react"
import axios from "./axios"
import "./Row.css"


const base_Url = "https://image.tmdb.org/t/p/original/" 

function Row({title , fetchUrl, isLargeRow }){
  const [movies, setMovies] = useState([])
  /*movies = [] aca se guarda como primera variable el corchete
  setMovies = y aca se guarda los cambios que se esta haciendo */
  
  useEffect(() =>{

    async function fetchData () {
      const requests = await axios.get(fetchUrl)
      setMovies(requests.data.results)
      return requests
    }
    fetchData()
  }, [fetchUrl] )
  //cuando es corchete vacio lo que estamos diciendo es que lo que estas dentro de
  //eseEffect se ejecute una vez, si dentro le pasamos una categoria [movies] o algo como un parametro
  //lo que estamos diciendo es que se ejecute esto una vez y cada vez que el parametro movie cambie
  return(
    <div className="row">
      <h1>{title}</h1>
         <div className="row_posters">
        {
          movies.map(movie => {
            return <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.title}
            />
          })
        }
      </div>
    </div>
  )
}
export default Row