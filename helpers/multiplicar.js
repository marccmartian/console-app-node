const colors = require("colors");
const fs = require("fs"); //es propio de node

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = ""; // se hace esta copia para que el archivo generado se muestre bien

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".blue} ${i} = ${colors.yellow(base * i)}\n`;
    }

    if (listar) {
      console.log("===============".rainbow);
      console.log("   Tabla del:", colors.bgGreen.underline(base));
      console.log("===============".rainbow);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`.green;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo, //crearArchivo: crearArchivo
};
