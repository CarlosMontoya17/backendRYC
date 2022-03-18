const db = require("../models");
const mainvr = db.mainvr;


//Cotizadores
exports.upData = (req, res) => {
    const id = req.body.id;
    mainvr.update({
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
    mainvr.findAll({
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
    mainvr.findAll({
        attributes: ['id', 'calle','int','ext','colonia', 'cp', 'd', 'm', 's', 'l', 'mza','nombremunicipio'],
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
    mainvr.update({
        liga: req.body.liga,
        anotacion: req.body.anotacion,
        pastedby: req.body.pastedby,
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
    mainvr.findAll({
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