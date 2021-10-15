import './App.css';
import Row from './component/row/Row';
import requests from './component/netflix/requests';

function App() {
  return (
    <div className="app">
      <h1>hello yihua</h1>

      <Row title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
