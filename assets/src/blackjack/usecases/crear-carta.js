export const crearCarta = (carta, turno, divCartas) => {
  // CODIGO PARA INSERTAR UNA NUEVA CARTA AL DOM
  const nuevaCarta = document.createElement('img');
  nuevaCarta.classList.add('cartas');
  nuevaCarta.src = `./public/cartas/${carta}.png`;
  divCartas[turno].appendChild(nuevaCarta);
};
