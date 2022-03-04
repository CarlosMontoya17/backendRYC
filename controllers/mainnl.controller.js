const db = require("../models");
const mainnl = db.mainnl;


//Cotizadores
exports.upData = (req, res) => {
    const id = req.body.id;
    mainnl.update({
        montolinea4: req.body.montolinea4,
        montolinea2: req.body.montolinea2,
        descmensual: req.body.descmensual,
        aplica: req.body.aplica,
        excepcion: req.body.excepcion,
        precalif: 'false'
    }, {where: {id: id }}).then(data => {
        if(data == 1){
            res.sendStatus(200);
        }   
        else{
            res.sendStatus(500);
        }
    }).catch(error =>{
        res.status(500).send({
            message:error
        });
    });
};

//Encontrar por CURP
exports.findByCurp = (req, res) => {
    const curp = req.params.curp;
    mainnl.findAll({
        where: {curp: curp},
        raw: true
    }).then(data =>{
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            message:error
        });
    });
};        


//Encontrar por Rango de asignación
exports.findByRange = (req, res) => {
    mainnl.findAll({
        attributes: ['id','nom_aseg', 'curp', 'calle','int','ext','colonia', 'cp', 'nombreentidad','nombremunicipio'],
        where: {aplica: 'si', precalif: 'false'},
        order: [
            ['id', 'ASC']
        ],
        offset: req.params.lower, limit: req.params.higher
      }).then(data =>{
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            message: error
        });
    });
};

//Actualizar Ligas Google Maps
exports.updatePrecalif = (req, res) => {
    const id = req.params.id;
    mainnl.update({
        liga: req.body.liga,
        anotacion: req.body.anotacion,
        precalif: 'true'
    },{where: {id: id }}).then(data => {
        if(data == 1){
            res.sendStatus(200);
        }   
        else{
            res.sendStatus(500);
        }
    }).catch(error => {
        res.status(500).send({
            message:error
        });
    });
};

//Todos ya cotizados
exports.getAllApply = (req, res) => {
    mainnl.findAll({
        where: {
            aplica: 'si',
            precalif: 'true'
        }
    }).then(data => {
        res.send(data);
    }).catch(error =>{ 
        res.status(500).send({
            message:error
        });
    });
};