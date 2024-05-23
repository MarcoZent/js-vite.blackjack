/**
 *  Esta funcion extrae en valor numerico de la carta
 * @param {string} carta
 * @returns {number} Retorna el valor de la carta
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};
