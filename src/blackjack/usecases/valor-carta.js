
/**
 * Esta función recibe una carta para obtener su valor
 * @param {<String>} carta 
 * @returns {<Number>} devuelve el valor de la carta en forma de número
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
