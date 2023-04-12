const cawd = document.createElement("script");
cawd.src =
  "https://cdn.jsdelivr.net/gh/spacexdw/ds-web-components@main/components/Awards/index%400.0.2.js";
cawd.type = "module";
document.body.appendChild(cawd);

const metadescripcion = "test Prevenir es cuidarse. Conoce las acciones que puedes tomar para cuidarte y prevenir enfermedades."
const metadescripcionTag = document.querySelector("meta[name='description']");
metadescripcionTag.setAttribute("content", metadescripcion);