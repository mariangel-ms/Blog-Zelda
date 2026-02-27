const preguntasTotal = [
  {
    titulo: "¿Cuál es la forma más rápida de bajar de una montaña muy alta sin sufrir daño?",
    opciones: [
      { texto: "Saltar y esperar caer en el agua", puntos: 7 },
      { texto: "Equipar un escudo y surfear sobre él", puntos: 8 },
      { texto: "Usar la paravela para planear suavemente", puntos: 10 },
      { texto: "Bajar corriendo por la ladera", puntos: 3 }
    ]
  },
  {
    titulo: "Ves un grupo de Bokoblins descansando cerca de barriles rojos. ¿Qué haces?",
    opciones: [
      { texto: "Disparar una flecha de fuego a los barriles", puntos: 10 },
      { texto: "Correr y atacar con tu espada", puntos: 5 },
      { texto: "Lanzar una bomba remota desde lejos", puntos: 8 },
      { texto: "Pasar de largo sin que te vean", puntos: 4 }
    ]
  },
  {
    titulo: "¿Qué debes hacer si Link se queda sin energía (estamina) mientras nada?",
    opciones: [
      { texto: "Intentar nadar más rápido hacia la orilla", puntos: 0 },
      { texto: "Flotar quieto hasta que se recupere sola", puntos: 2 },
      { texto: "Beber un elíptico de velocidad", puntos: 4 },
            { texto: "Comer un plato que recupere resistencia rápido", puntos: 10 }
    ]
  },
  {
   titulo: "Tu arma está a punto de romperse en medio de un combate. ¿Cuál es la mejor solución?",
    opciones: [
      { texto: "Combinarla (Combinación) con una roca o material fuerte", puntos: 10 },
      { texto: "Seguir golpeando hasta que explote sobre el enemigo", puntos: 6 },
      { texto: "Guardarla y usar un arco de madera", puntos: 4 },
      { texto: "Lanzarla directamente a la cabeza del rival", puntos: 8 }
    ]
  },
  {
    titulo: "Quieres cocinar algo rico. ¿Qué pasa si mezclas comida con partes de monstruo?",
    opciones: [
      { texto: "Se crea un elíptico de mucha fuerza", puntos: 3 },
      { texto: "Sale una 'Comida Dubitativa' (muy mala)", puntos: 10 },
      { texto: "La comida recupera el doble de corazones", puntos: 0 },
      { texto: "No pasa nada, se cocinan por separado", puntos: 2 }
    ]
  }
];

const pregunta = document.querySelector("#pregunta");
const opciones = document.querySelector("#opciones");
const resultado = document.querySelector("#resultado");
const primerBoton = document.querySelector("#boton-1");
const segundoBoton = document.querySelector("#boton-2");
const tercerBoton = document.querySelector("#boton-3");
const cuartoBoton = document.querySelector("#boton-4");
const reinicio = document.querySelector(".reinicio");
const volverPagina = document.querySelector(".volver-pagina");

let indicePregunta = 0;
let puntajeTotal = 0;
let indiceOpcion = 0;

const inicio = () => {
  pregunta.innerText = preguntasTotal[indicePregunta].titulo;
  primerBoton.innerText = preguntasTotal[indicePregunta].opciones[0].texto;
  segundoBoton.innerText = preguntasTotal[indicePregunta].opciones[1].texto;
  tercerBoton.innerText = preguntasTotal[indicePregunta].opciones[2].texto;
  cuartoBoton.innerText = preguntasTotal[indicePregunta].opciones[3].texto;
};

const respuesta = (indiceOpcion) => {
  let puntos = preguntasTotal[indicePregunta].opciones[indiceOpcion].puntos;
  puntajeTotal = puntajeTotal + puntos;
  indicePregunta++;

  if (indicePregunta < preguntasTotal.length) {
    inicio();
  } else {
    resultadoFinal();
  }
};

const resultadoFinal = () => {
  opciones.setAttribute("class", "quitar-todo");
  pregunta.setAttribute("class", "quitar-todo");

  if (puntajeTotal == 50) {
    resultado.innerHTML = `<h2 class="titulo-mensaje">¡Héroe de Leyenda!</h2><br>"Has alcanzado la sabiduría de la Trifuerza. Tu conocimiento de Hyrule es absoluto y no dejas nada al azar."<br><img src="img/trifuerza.png" alt="Trifuerza" width="13%">`;
} 
else if (puntajeTotal >= 40) {
    resultado.innerHTML = `<h2 class="titulo-mensaje">Criterio de Caballero Real.</h2><br>"Conoces bien las reglas del mundo. Hyrule está a salvo bajo tu estrategia, aunque siempre hay detalles por pulir"<br><img src="img/trifuerza.png" alt="Trifuerza" width="13%">`;
} 
else if (puntajeTotal >= 20) {
    resultado.innerHTML = `<h2 class="titulo-mensaje">Espíritu de Aventurero.</h2><br>"Tienes buen instinto y has sobrevivido, pero tu técnica aún tiene fisuras. La maestría real está en los detalles que hoy pasaste por alto."<br><img src="img/trifuerza.png" alt="Trifuerza" width="13%">`;
} 
else {
    resultado.innerHTML = `<h2 class="titulo-mensaje">Aprendiz de Viajero.</h2><br>"Tu aventura ha terminado pronto. Has confiado más en la suerte que en el análisis. Recuerda: en Hyrule, la prudencia vale más que mil espadas."<br><img src="img/trifuerza.png" alt="Trifuerza" width="13%">`;
}

  const botonReiniciar = document.createElement("button");
  botonReiniciar.innerText = "REINICIAR";
  botonReiniciar.classList.add("boton-reinicio");
  botonReiniciar.onclick = () => location.reload();
  reinicio.appendChild(botonReiniciar);

  const botonVolverPagina = document.createElement("button");
  botonVolverPagina.classList.add("boton-volver");
  botonVolverPagina.innerHTML = "INICIO";
    botonVolverPagina.onclick = () => window.location.href = "index.html";
  volverPagina.appendChild(botonVolverPagina);
}

const primerBotonClick = () => {respuesta(0)};
const segundoBotonClick = () => {respuesta(1)};
const tercerBotonClick = () => {respuesta(2)};
const cuartoBotonClick = () => {respuesta(3)};

primerBoton.addEventListener("click", primerBotonClick);
segundoBoton.addEventListener("click", segundoBotonClick);
tercerBoton.addEventListener("click", tercerBotonClick);
cuartoBoton.addEventListener("click", cuartoBotonClick);

inicio();
