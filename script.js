
const preguntasTotal = [
  {
    titulo: "¿Cuál es el destino final de la princesa Zelda para asegurar la derrota del Rey Demonio?",
    opciones: [
      { texto: "Viajar al subsuelo para sellar el Miasma", puntos: 5 },
      { texto: "Convertirse en un dragón eterno para custodiar la Espada Maestra", puntos: 10 },
      { texto: "Reunir a los cuatro Sabios en las Islas Celestiales", puntos: 3 },
      { texto: "Permanecer oculta en el flujo del tiempo para siempre", puntos: 0 }
    ]
  },
  {
    titulo: "¿Qué habilidad de Link permite atravesar superficies planas superiores y evitar escaladas?",
    opciones: [
      { texto: "Retroceso", puntos: 2 },
      { texto: "Ultramano", puntos: 4 },
      { texto: "Infiltración", puntos: 10 },
      { texto: "Combinación", puntos: 0 }
    ]
  },
  {
    titulo: "Además de la Superficie y las Islas Celestiales, ¿qué otra región se puede explorar?",
    opciones: [
      { texto: "El Reino del Crepúsculo", puntos: 0 },
      { texto: "El vasto y peligroso Subsuelo", puntos: 10 },
      { texto: "Las Tierras del Albor", puntos: 5 },
      { texto: "El Templo del Tiempo", puntos: 3 }
    ]
  },
  {
    titulo: "¿Qué caracteriza principalmente a la tribu de los Goron en esta era?",
    opciones: [
      { texto: "Su maestría con el arco y el vuelo", puntos: 0 },
      { texto: "Su cultura basada en el honor y el combate en el desierto", puntos: 5 },
      { texto: "Su nado elegante y dominio del agua", puntos: 0 },
      { texto: "Su fuerza y resistencia extrema en regiones volcánicas", puntos: 10 }
    ]
  },
  {
    titulo: "Según las palabras de Link, ¿en qué consiste el verdadero coraje?",
    opciones: [
      { texto: "En no sentir miedo ante el Rey Demonio", puntos: 0 },
      { texto: "En la voluntad de seguir adelante cuando todo parece perdido", puntos: 10 },
      { texto: "En dominar todas las habilidades del brazo de Rauru", puntos: 5 },
      { texto: "En sacrificar la humanidad por el bien del reino", puntos: 2 }
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
const puntajeEntero = document.querySelector(".puntaje")
const barra = document.querySelector("#barra-progreso")
const barraContenedor = document.querySelector(".contenedor-progreso")

let indicePregunta = 0;
let puntajeTotal = 0;
let indiceOpcion = 0;

const actualizarProgreso = () => {
  let porcentaje = (indicePregunta / preguntasTotal.length) * 100;
    barra.style.width = porcentaje + "%";
};

const inicio = () => {
  actualizarProgreso();
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
barraContenedor.setAttribute("class", "quitar-todo")

if (puntajeTotal === 50) {
        resultado.innerHTML = `
            <h2 class="titulo-mensaje">¡Sabio de las Crónicas!</h2>
            <p class="texto-resultado">"Has demostrado una atención absoluta. No solo leíste, sino que comprendiste cada secreto del reino. Eres un verdadero guardián de la historia de Hyrule."</p>
            <img src="img/trifuerza.png" alt="Trifuerza" width="13%">`;
    } 
    else if (puntajeTotal >= 35) {
        resultado.innerHTML = `
            <h2 class="titulo-mensaje">Explorador Atento.</h2>
            <p class="texto-resultado">"Tu conocimiento es sólido, pero algunos detalles se te escaparon entre líneas. Un poco más de lectura y alcanzarás la iluminación de los Sabios."</p>
            <img src="img/trifuerza.png" alt="Trifuerza" width="13%">`;
    } 
    else if (puntajeTotal >= 20) {
        resultado.innerHTML = `
            <h2 class="titulo-mensaje">Viajero Distraído.</h2>
            <p class="texto-resultado">"Tienes el espíritu, pero te falta el rigor. En Hyrule, ignorar los detalles de la historia puede ser tan peligroso como un Guardián."</p>
            <img src="img/trifuerza.png" alt="Trifuerza" width="13%">`;
    } 
    else {
        resultado.innerHTML = `
            <h2 class="titulo-mensaje">Aprendiz Fugaz.</h2>
            <p class="texto-resultado">"Parece que pasaste por alto las crónicas. La verdadera fuerza de un héroe reside en su mente. ¡Vuelve al blog y descubre lo que te falta por aprender!"</p>
            <img src="img/trifuerza.png" alt="Trifuerza" width="13%">`;
    }

volverPagina.innerHTML = `<a href="index.html"><button class="boton-volver">VOLVER</button></a>`
reinicio.innerHTML = `<a href="trivia.html"><button class="boton-reinicio">REINICIAR</button></a>`

puntajeEntero.innerHTML = `<h2 class="puntaje">Tu puntaje total es de: <span class="numero-destacado">${puntajeTotal}</span></h2>`
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
