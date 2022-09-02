import './assets//main/App.scss';
import Footer from './views/footer/footer';
import Header from './views/header/header';
import Main from './views/main/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Main/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
