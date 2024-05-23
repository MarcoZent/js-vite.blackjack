import { valorCarta } from './index';
export const acumularPuntos = (
  carta,
  turno,
  puntosjugadores,
  puntuacionJugador
) => {
  puntosjugadores[turno] += valorCarta(carta);
  puntuacionJugador[turno].innerText = puntosjugadores[turno];
  return puntosjugadores[turno];
};
