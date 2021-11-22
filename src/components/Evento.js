import Button from './eventos/Button'

function Evento(){

    function primeiroEvento(){
        console.log("Opa, fui ativado, primeiro evento")
    }

    function segundoEvento(){
        console.log("Opa, fui ativado, segundo evento")
    }

    return (
        <div>
            <h1>Eventos</h1>
            
            <p>Clique para disparar um evento:</p>

            {/* Passando evento para o componente filho disparar no pai */}
            <Button event={primeiroEvento} text='Primeiro Evento'/>
            <Button event={segundoEvento} text='Segundo Evento'/>

            <button onClick={primeiroEvento}>Ativar!</button>
        </div>
    )
}

export default Evento