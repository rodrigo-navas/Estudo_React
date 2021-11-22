import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMayName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form';
import Condicional from './components/Condicional';

function maiuscula(name){
   return name.toUpperCase();
}

function App() {
  return (
    <div className="App">
          <HelloWorld></HelloWorld>
          <SayMayName nome={maiuscula("Rodrigo Navas")}></SayMayName>
          <Pessoa 
             foto="https://via.placeholder.com/150" 
             alt="Rodrigo Navas"
             nome="Rodrigo Navas"
             profissao= "Analista de Sistemas"
             idade="30 Anos">
          </Pessoa>

          <List></List>

          <Evento></Evento>

          <Form></Form>

          <Condicional></Condicional>
    </div>
  );
}

export default App;
