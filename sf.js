const can = document.createElement("script");
can.src =
  "https://cdn.jsdelivr.net/gh/spacexdw/ds-web-components@main/components/ActionsNav/index.js";
can.type = "module";
document.body.appendChild(can);

const metadescripcion = "test Prevenir es cuidarse. Conoce las acciones que puedes tomar para cuidarte y prevenir enfermedades."
const metadescripcionTag = document.querySelector("meta[name='description']");
metadescripcionTag.setAttribute("content", metadescripcion);