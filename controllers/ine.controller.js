const db = require("../models");
const inevr = db.inevr;
const inech = db.ineChiapas12;
const inenl = db.inenl;
const municipiosChiapas = db.municipiosChiapas;
const Op = db.Sequelize.Op;

var nombre = [];

exports.getDirections = (req, res) => {
    inech.findOne({
        attributes: ['cve', 'edad', 'nombre', 'paterno', 'materno', 'fecnac', 'sexo', 'calle', 'int', 'ext', 'colonia', 'cp', 'e', 'd', 'm', 's', 'l', 'mza', 'consec', 'cred', 'folio', 'nac', 'curp'],
        where: { curp: req.params.curp }
    }).then(data => {
        console.log('Then');
        res.send(data);
    }).catch(err => {
        console.log('Err');
        res.status(500).send({
            message: err
        });
    });
};



