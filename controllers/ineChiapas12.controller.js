const db = require("../models");
const inechiapas12 = db.inechiapas12;
const municipiosChiapas = db.municipiosChiapas;
const Op = db.Sequelize.Op;




exports.getDireccion = (req, res) => {
  inechiapas12.findOne({
  	attributes: ['calle', 'int', 'ext', 'cp', 'e', 'm'],
    where: { curp : req.params.curp}
  }).then(data => {
    municipiosChiapas.findOne({
      attributes: ['nombreEntidad', 'nombreMunicipio'],
      where: { entidad : data.e, municipio: data.m}
    }).then(data2 => {
      data.e = data2.nombreEntidad;
      data.m = data2.nombreMunicipio;
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err    });
        console.log("aqui");
    });
  }).catch(err => {
    res.status(500).send({
      message: err    });
  });
};

exports.getAll = (req, res) => {
  inechiapas12.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });

};

exports.getByCond = (req, res) => {
  const dat = req.params.dat;
  inechiapas12.findAll({
      attributes: ['cve', 'edad', 'nombre', 'paterno', 'materno', 'fecnac', 'sexo', 'calle', 'int', 'ext', 'colonia', 'cp', 'd', 's', 'l', 'mza', 'consec', 'cred', 'folio', 'nac', 'curp', 'nombreEntidad', 'nombreMunicipio', 'namefull'],
      where: { 
          [Op.or]: [{ curp: dat }, { namefull: dat }, {fecnac: dat}] 
      },
      raw: true
  }).then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err
      });
  });
};