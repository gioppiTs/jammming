import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResult from './Components/SearchResults/SearchResults';
import Playlist from './Components/Playlist/Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Questa è l'App Jammming
        </p>

        <SearchBar />
        <SearchResult />
        <Playlist />
       
      </header>
    </div>
  );
}

export default App;
