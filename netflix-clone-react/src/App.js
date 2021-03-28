import './App.css'
import Row from "./row"
import Request from "./request"
import Banner from "./banner"

function App(){
  return (
    
    <div className="App">
      <Banner  />
      <Row
        title="NETFLIXORIGINALS"
        fetchUrl={Request.fetchNetflixOriginals}
        isLargeRow      
      />
      <Row title="trending Now" fetchUrl={Request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies}/>
      <Row title="Horros Movies" fetchUrl={Request.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={Request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries} />

    </div>
)}

export default App
