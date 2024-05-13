import _ from 'underscore';



/**
 * Esta función crea un nuevo deck
 * @param {array<String>} tiposDeCarta 
 * @param {array<String>} tiposEspeciales 
 * @returns {array<String>} return del nuevo deck de cartas
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if ( !tiposDeCarta ) throw new Error('tiposDeCarta es obligatorio!')
    if ( tiposDeCarta.length === 0 ) throw new Error('TiposDeCarta no puede ser un arreglo vacio!')
    
    if ( !tiposEspeciales ) throw new Error('tiposEspeciales es obligatorio!')
    if ( tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales no puede ser un arreglo vacio!')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

// export default crearDeck;