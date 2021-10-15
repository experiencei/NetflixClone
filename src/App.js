import './App.css';
import Row from './component/row/Row';
import requests from './component/netflix/requests';
import Banner from "./component/banner/Banner"
function App() {
  return (
    <div className="app">
      <Banner/>
      <Nav
      <Row title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated"  fetchUrl={requests.fetchTopRated }/>
      <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries"  fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
