import {
  crearDeck,
  pedirCarta,
  valorCarta,
  turnoComputadora,
  crearCarta,
  acumularPuntos,
} from './usecases';
/*
 * 2C = DOS DE TREBOL
 * 2D = DOS DE DIAMANTES
 * 2H = DOS DE CORAZONES
 * 2S = DOS DE ESPADAS
 */

// CODIGO PARA CREAR LA BARAJA--------------------------------------------------

(() => {
  'use strict';
  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
    cartasEspeciales = ['A', 'J', 'Q', 'K'];
  let puntosjugadores = [0, 0];

  // Esta funcion inicializa el juego
  const inicializarJuego = () => {
    deck = [];
    deck = crearDeck(tipos, cartasEspeciales);
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    btnNuevo.disabled = true;
    puntuacionJugador.forEach((elemento) => {
      elemento.innerText = 0;
    });
    divCartas.forEach((elemento) => {
      elemento.innerHTML = '';
    });
    puntosjugadores = [0, 0];
  };

  // CODIGO PARA TOMAR 1 CARTA DE LA BARAJA--------------------------------------
  /*
      Logica => poder escoger una carta de la baraja y que esta se extraiga y 
      a la vez deje de existir en la baraja
  */

  // CODIGO PARA TOMAR E VALOR DE LA CARTA--------------------------------------
  /*
      Logica => poder extraer el valor de la carta tomada al azar
  */

  // Turno:0 = primer jugador y el ultimo sera la computadora

  const mensajeResultado = (puntosMinimos, puntos) => {
    setTimeout(() => {
      if (puntosMinimos > 21) {
        alert('Perdiste..!');
      } else if (puntos === puntosMinimos) {
        alert('Nadie gana..!');
      } else if (puntos > 21) {
        alert('ganaste..!');
      } else {
        alert('perdiste..!');
      }
      btnNuevo.disabled = false;
      btnPedir.disabled = true;
      btnDetener.disabled = true;
    }, 100);
  };

  /*
    EVENTOS
  */
  // REFERENCIAS HTML
  const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo'),
    puntuacionJugador = document.querySelectorAll('small'),
    divCartas = document.querySelectorAll('.divCartas');

  btnPedir.disabled = true;
  btnDetener.disabled = true;

  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(
      carta,
      0,
      puntosjugadores,
      puntuacionJugador
    );

    // CODIGO PARA INSERTAR UNA NUEVA CARTA AL DOM
    crearCarta(carta, 0, divCartas);

    // VALIDAR PUNTOS JUGADOR
    if (puntosJugador > 21) {
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener('click', () => {
    btnDetener.disabled = true;
    btnPedir.disabled = true;
    turnoComputadora(puntosjugadores[0]);
  });

  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
  });
})();
