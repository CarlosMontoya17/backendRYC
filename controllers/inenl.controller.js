const db = require("../models");
const inenl = db.inenl;
const municipiosChiapas = db.municipiosChiapas;
const Op = db.Sequelize.Op;


exports.getDireccionNuevoLeon = (req, res) => {
  const curp = req.params.curp;
  inenl.findOne({
    attributes: ['calle', 'int', 'ext', 'cp', 'e', 'm'],
    where: { curp: {[Op.like]: curp+'%'} }
  }).then(data => {
    municipiosChiapas.findOne({
      attributes: ['nombreEntidad', 'nombremunicipio'],
      where: { entidad: data.e, municipio: data.m }
    }).then(data2 => {
      data.e = data2.nombreEntidad;
      data.m = data2.nombremunicipio;
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