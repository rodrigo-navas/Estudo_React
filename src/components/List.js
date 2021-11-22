import Item from './Item'

function List(){
  return(
      //Quando não quiser retornar um componente tipo <div> basta abrir e fechar a tag <></> conceito chamado "fragments"
      <>
          <h1>Minha Lista</h1>
          <ul>
              <Item marca="Ferrari" ano_lancamento={1985}/>
              <Item marca="Fiat" ano_lancamento={1964}/>
              <Item marca="Renault" ano_lancamento={1964}/>
              
              {/* na classe item tem um default para as propriedades quando não informado valor */}
              <Item/>
          </ul>
      </>
  )
}

export default List