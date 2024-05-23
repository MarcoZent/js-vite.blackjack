import { crearCarta, pedirCarta, acumularPuntos } from './index';

export const turnoComputadora = (puntosMinimos, deck = []) => {
  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(carta, 1);
    crearCarta(carta, 1);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
  mensajeResultado(puntosMinimos, puntosComputadora);
};
