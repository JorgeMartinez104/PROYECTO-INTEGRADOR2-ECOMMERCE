fetch("instrumentos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    localStorage.setItem("instrumentos", JSON.stringify(datos));

// document.addEventListener("DOMContentLoaded", () => {
  const gridInstrumentos = document.getElementById("grid-instrumentos");
  const datosInstrumentos = JSON.parse(localStorage.getItem("instrumentos"));
  console.log(datosInstrumentos);
  if (datosInstrumentos) {
    datosInstrumentos.instrumentos.forEach((instrumento) => {
      //   1.- Se crea un elemento <div> para cada instrumento
      const gridItem = document.createElement("div");
      //   2.- Se agrega la clase "grid-item" al div que contiene el nombre del instrumento y su imagen
      gridItem.classList.add("grid-item");
      //    3.- Se agrega una etiqueta h4 con el texto del título a nuestro nuevo elemento <div>.
      gridItem.innerHTML = `<h4>${instrumento.nombre}</h4>
      <img src="${instrumento.imagen}" alt="${instrumento.nombre}">
      `;

      gridItem.addEventListener("click", () => {
        mostrarDetallesInstrumento(instrumento);
      });

      gridInstrumentos.appendChild(gridItem);
    });
  }}
);

function mostrarDetallesInstrumento(instrumento) {
  //Redireccionar a otra página para mostrar los detalles
  window.location.href = `detalle.html?id=${instrumento.id}`;
}

