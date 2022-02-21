const db = require("../models");
const mainvr = db.mainvr;


exports.updater = (req, res) => {
    const id = req.body.id
    mainvr.update({
        montolinea4: req.body.montolinea4,
        montolinea2: req.body.montolinea2,
        descmensual: req.body.descmensual,
        aplica: req.body.aplica,
        excepcion: req.body.excepcion,
        precalif: 'false'
    },{where: {id:id}}).then(dat => {
        if(dat == 1){
            console.log("Updated!");
            res.sendStatus(200);
        }
        else{
            res.sendStatus(500);
        }
        
    }).catch(err => {
        res.status(500).send({
            message: err 
        });
        console.log("Here!");
    }); 
};


