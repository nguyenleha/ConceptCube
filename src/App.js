import './assets//main/App.scss';
import Header from './views/header/header';
import Main from './views/main/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Main/>
    </div>
  );
}

export default App;
