const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

//==== usando process.argv propio de JS
//console.log(process.argv);
//const [, , arg3 = "base=5"] = process.argv;
//const [, base] = arg3.split("=");

//=====================Usando de YARGS
// const argv = require("yargs").argv;
// console.log(argv);
//console.log("base: yargs", argv.base);

crearArchivo(argv.b, argv.l, argv.h)
  .then((archivo) => console.log(archivo))
  .catch((error) => console.log(error));
