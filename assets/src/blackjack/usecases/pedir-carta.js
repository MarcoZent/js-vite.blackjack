/**
 * Esta funcion devuelve una carta del deck
 * @param {Array<string>} deck
 * @returns {string} Retorna la ultima carta del deck
 */
export const pedirCarta = (deck) =>
  deck.length > 0 ? deck.pop() : 'Sin Cartas';
