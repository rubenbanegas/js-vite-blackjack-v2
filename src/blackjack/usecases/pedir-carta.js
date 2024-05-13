
/**
 * Esta funcion saca una carta del deck
 * @param {array<String>} deck es un array de cartas
 * @returns {<String>} devuelve la carta sacada del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}