const cawd = document.createElement("script");
cawd.src =
  "https://d51h1y0hva8v.cloudfront.net/docs/default-source/idigital/eloisa-ds/index.js?sfvrsn=1a3abc5c_4";
cawd.type = "module";
document.body.appendChild(cawd);

const metadescripcion = "test Prevenir es cuidarse. Conoce las acciones que puedes tomar para cuidarte y prevenir enfermedades."
const metadescripcionTag = document.querySelector("meta[name='description']");
metadescripcionTag.setAttribute("content", metadescripcion);