const db = require("../models");
const mainch = db.mainch;
const Op = db.Sequelize.Op;
const Sequelize = db.Sequelize;


//Quoters
exports.upData = (req, res) => {
    const id = req.body.id;
    mainch.update({
        montolinea4: req.body.montolinea4,
        montolinea2: req.body.montolinea2,
        descmensual: req.body.descmensual,
        aplica: req.body.aplica,
        excepcion: req.body.excepcion,
        precalif: 'false'
    }, { where: { id: id } }).then(data => {
        if (data == 0) {
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    }).catch(error => {
        res.status(500).send({
            message: error
        });
    });
};

//Quoters by priority
    //Give Municipality
exports.giveMunicipality = (req, res) => {
    mainch.findAll({
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('nombremunicipio')) ,'nombremunicipio']
        ],
        where: { nombremunicipio: {[Op.not]: null} }
    }).then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err
        });
    });
}

    //Give Enterprisses
exports.giveEnterprisses = (req, res) => {
    mainch.findAll({
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('nom_pat')) ,'nom_pat']
        ]
    }).then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err
        });
    });
};

    //Verify nothing is running
exports.verifyQuoter = (req,res) => {
    user = req.params.user;
    mainch.findOne({
        attributes: ['id', 'priority', 'aplica'],
        where: {priority: user}
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err
        });
    });
};
    //Futuros Cambios
    //Setup Priory
exports.prioryData = (req, res) => {
    const cond = req.params.cond;
    const user = req.body.byUser;
    const dat = req.body.dat;
    if (cond == "MUNICIPALITY") {
        mainch.update(
            { priority: user },
            {
                where:
                    { nombremunicipio: dat }
            }
        ).then(data => {
            if (data == 0) {
                res.sendStatus(500);
            }
            else {
                res.sendStatus(200);
            }
        }).catch(error => {
            res.status(500).send({
                message: error
            });
        });

    }
    else if (cond == "SALARY") {
        // dat = Min
        //Max
        const subdat = req.body.sdat;    
        mainch.update(
            { priority: user },
            {
                where:
                    { [Op.and]: [{ salario: {[Op.between]: [dat,subdat]} }, { aplica: null }] }
            }
        ).then(data => {
            if (data == 0) {
                res.sendStatus(500);
            }
            else {
                res.sendStatus(200);
            }

        }).catch(error => {
            res.status(500).send({
                message: error
            });
        });
    }
};
    //Checkpoint Quoter





//Find By CURP
exports.findByCurp = (req, res) => {
    const curp = req.params.curp;
    mainch.findAll({
        where: { curp: curp },
        raw: true
    }).then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            message: error
        });
    });
};

//Find by Range
exports.findByRange = (req, res) => {
    const lower = req.params.lower;
    const higher = req.params.higher;
    mainch.findAll({
        attributes: ['nom_aseg', 'curp', 'calle', 'int', 'ext', 'colonia', 'cp', 'nombreentidad', 'nombremunicipio'],
        where: { aplica: 'si', precalif: 'false' },
        offset: lower, limit: higher
    }).then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            message: error
        });
    });
};

//Update Google Links
exports.updatePrecalif = (req, res) => {
    const id = req.params.id;
    mainch.update({
        liga: req.body.liga,
        anotacion: req.body.anotacion,
        precalif: 'true'
    }, { where: { id: id } }).then(data => {
        if (data == 1) {
            res.sendStatus(200);
        }
        else {
            res.sendStatus(500);
        }
    }).catch(error => {
        res.status(500).send({
            message: error
        });
    });
};

//All prospects Ready
exports.getAllApply = (req, res) => {
    mainch.findAll({
        where: {
            aplica: 'si',
            precalif: 'true'
        }
    }).then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            message: error
        });
    });
};