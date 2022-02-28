module.exports = (sequelize, Sequelize) => {
  const municipiosChiapas = sequelize.define("municipiosChiapas", {
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
  return municipiosChiapas;
};