/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tipos
 * @param {Array<String>} cartasEspeciales
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tipos, cartasEspeciales) => {
  let deck = [];
  let i = 2;
  while (i <= 10) {
    for (let tipo of tipos) {
      deck.push(`${i}${tipo}`);
    }
    i++;
  }

  for (let especial of cartasEspeciales) {
    for (let tipo of tipos) {
      deck.push(`${especial}${tipo}`);
    }
  }

  // CODIGO PARA MEXCLAR LA BARAJA---------------------UNDERSCORE.JS--------------
  // pagina - https://underscorejs.org/
  // recurso - UMD (Production)
  // funcion _.shuffle => nos sirve para que un arreglo se mexcle aleatoriamente
  return _.shuffle(deck);
};
