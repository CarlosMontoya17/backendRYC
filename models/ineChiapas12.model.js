module.exports = (sequelize, Sequelize) => {
  const inechiapas12 = sequelize.define("inechiapas12", {
    //cve
    cve: {
      type: Sequelize.STRING
    },
    //edad
    edad: {
      type: Sequelize.STRING
    },
    //nombre
    nombre: {
      type: Sequelize.STRING
    },
    //paterno
    paterno: {
      type: Sequelize.STRING
    },
    //materno
    materno: {
      type: Sequelize.STRING
    },
    //fecnac
    fecnac: {
      type: Sequelize.STRING
    },
    //sexo
    sexo: {
      type: Sequelize.STRING
    },
    //calle
    calle: {
      type: Sequelize.STRING
    },
    //int
    int: {
      type: Sequelize.STRING
    },
    //ext
    ext: {
      type: Sequelize.STRING
    },
    //colonia
    colonia: {
      type: Sequelize.STRING
    },
    //cp
    cp: {
      type: Sequelize.STRING
    },
    //e
    e: {
      type: Sequelize.STRING
    },
    //d
    d: {
      type: Sequelize.STRING
    },
    //m
    m: {
      type: Sequelize.STRING
    },
    //S
    s: {
      type: Sequelize.STRING
    },
    //l
    l: {
      type: Sequelize.STRING
    },
    //mza
    mza: {
      type: Sequelize.STRING
    },
    //consec
    consec: {
      type: Sequelize.STRING
    },
    cred: {
      type: Sequelize.STRING
    },
    folio: {
      type: Sequelize.STRING
    },
    nac: {
      type: Sequelize.STRING
    },
    curp: {
      type: Sequelize.STRING
    },
  },{
  freezeTableName: true
  });
  return inechiapas12;
};