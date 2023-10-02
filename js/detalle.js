document.addEventListener("DOMContentLoaded", () => {
  const detalleInstrumento = document.getElementById("detalle-instrumento");

  //obtenemos el ID del instrumento de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const idInstrumento = urlParams.get("id");

  //Obtenemos los datos del instrumento desde el localStorage
  const datosInstrumentos = JSON.parse(localStorage.getItem("instrumentos"));

  //Buscamos el instrumento por ID
  const instrumentoSeleccionado = datosInstrumentos.instrumentos.find(
    (instrumento) => instrumento.id == idInstrumento
  );

  if (instrumentoSeleccionado) {
    //Creamos un elemento div para mostrar los detalles del instrumento y lo agregamos al DOM
    const contenedorDetallesInstrumento = document.createElement("div");
    contenedorDetallesInstrumento.classList.add("detalles-instrumento");
    contenedorDetallesInstrumento.innerHTML = `
    <h2>${instrumentoSeleccionado.descripcion}</h2>
    <p>ID: ${instrumentoSeleccionado.id}</p>
    <img src="${instrumentoSeleccionado.imagen}" alt="${instrumentoSeleccionado.nombre}">
    <p>DESCRIPCION: ${instrumentoSeleccionado.detalle}</p>
    <img src="${instrumentoSeleccionado.dimension}" alt="${instrumentoSeleccionado.nombre}">
    <p>Valor: ${instrumentoSeleccionado.precio} USD</p>
    `;
    //agregar a pagina principal
    detalleInstrumento.appendChild(contenedorDetallesInstrumento);
    
  }
});

