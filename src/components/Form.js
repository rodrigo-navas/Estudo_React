import {useState} from 'react'

function Form(){
   
  function cadastrarUsuario(e){
      e.preventDefault()
      
      console.log(name);
      console.log(password);

      console.log("cadastrou o usuário")
  }

    const[name, setName] = useState()
    const[password, setPassword] = useState()

   //Caso queira definir um valor default
   //const[name, setName] = useState("Navas")

   return (
       <div>
           <h1> Formulário </h1>
           <form onSubmit={cadastrarUsuario}>
               <div>
                   <label htmlFor='name'>Nome:</label>
                   <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    placeholder='Digite seu nome'
                    // value={name}
                    onChange={(e)=> setName(e.target.value)}/>
               </div>
               <div>
               
                <label htmlFor='password'>Senha:</label>
                
                <input 
                    type='password' 
                    id='password' 
                    name='password' 
                    placeholder='Digite sua senha'
                    onChange={(e)=> setPassword(e.target.value)}/>
               </div>
               <div>
                   <input 
                    type='submit' 
                    value='Cadastrar'/>
               </div>
           </form>
       </div>
   )

}

export default Form