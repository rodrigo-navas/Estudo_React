import logo from './logo.svg';
import './App.css';

function maiuscula(name){
   return name.toUpperCase();
}

function App() {

const name = 'Rodrigo Navas';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Olá, {maiuscula(name)}
        </a>
      </header>
    </div>
  );
}

export default App;
