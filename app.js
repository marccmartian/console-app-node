const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

//console.log(process.argv);
//const [, , arg3 = "base=5"] = process.argv;
//const [, base] = arg3.split("=");

// const base = 4;

// crearArchivo(base)
//   .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
//   .catch((err) => console.log(err));

//=====================Usando de YARGS==========================
// const argv = require("yargs").argv;
// console.log(argv);

//console.log("base: yargs", argv.base);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
