const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar, hasta) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }

    if (listar) {
      console.log("=================".rainbow);
      console.log("Tabla del ", colors.blue(base));
      console.log("=================".rainbow);
      console.log(consola);
    }

    await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return colors.yellow(`¡Tabla-${base}.txt creado!`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
