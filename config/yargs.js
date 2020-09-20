const description = {
  demand: true,
  alias: 'd',
  desc: 'Descripcion de la tarea por hacer'
};

const completado = {
  default: true,
  alias: 'c',
  desc: 'Marca como completado o pendiente la tarea'

};


const argv = require("yargs")
  .command("crear", "Crear por hacer", {
    description
  })
  .command("actualizar", "actualiza una tarea por hacer", {
    description,
    completado
  })
  .command("borrar", "borra una tarea", {
    description
  })
  .help()
  .argv;

module.exports = {
  argv
};
