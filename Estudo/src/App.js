// import logo from './logo.svg';
 import './App.css';
// import HelloWorld from './components/HelloWorld';
// import SayMayName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import List from './components/List'
// import Evento from './components/Evento'
// import Form from './components/Form';
// import Condicional from './components/Condicional';
// import OutraList from './components/OutraList';
// import Saudacao from './components/Saudacao';
// import SeuNome from './components/SeuNome';
// import { useState } from 'react';

import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function maiuscula(name){
   return name.toUpperCase();
}

function App() {
  // const meusItens = [
  //   'React','Vue','Angular'
  // ]
  
  // const [nome, setNome] = useState()

  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />  
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='empresa' element={<Empresa />}></Route>
          <Route path='contato' element={<Contato />}></Route>
        </Routes>    
    </div>
    <Footer/>
    </BrowserRouter>
  )
}
    // <div className="App">
    //       <HelloWorld></HelloWorld>
    //       <SayMayName nome={maiuscula("Rodrigo Navas")}></SayMayName>
    //       <Pessoa 
    //          foto="https://via.placeholder.com/150" 
    //          alt="Rodrigo Navas"
    //          nome="Rodrigo Navas"
    //          profissao= "Analista de Sistemas"
    //          idade="30 Anos">
    //       </Pessoa>

    //       <List></List>

    //       <Evento></Evento>

    //       <Form></Form>

    //       <Condicional></Condicional>

    //       <OutraList itens={ meusItens }></OutraList>

    //       <SeuNome setNome={setNome}></SeuNome>
    //       <Saudacao nome={nome}></Saudacao>
    // </div>


export default App;
