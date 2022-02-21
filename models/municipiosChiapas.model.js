module.exports = (sequelize, Sequelize) => {
  const municipioschiapas = sequelize.define("municipioschiapas", {
    entidad: {
      type: Sequelize.INTEGER
    },
    nombreEntidad: {
      type: Sequelize.STRING
    },
    municipio: {
      type: Sequelize.STRING
    },
    nombremunicipio: {
      type: Sequelize.STRING
    }
  });
  return municipioschiapas;
};