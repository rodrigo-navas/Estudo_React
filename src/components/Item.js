import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return (
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

// por regra, nesse momento o item.propTypes tem que ser com letra minuscula.
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number
}

Item.defaultProps = {
    marca: "Navas",
    ano_lancamento: 1990
}

export default Item