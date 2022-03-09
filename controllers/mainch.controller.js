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
            [Sequelize.fn('DISTINCT', Sequelize.col('nombremunicipio')), 'nombremunicipio']
        ],
        where: { nombremunicipio: { [Op.not]: null } }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err
        });
    });
}

//Give Enterprisses
exports.giveEnterprisses = (req, res) => {
    mainch.findAll({
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('nom_pat')), 'nom_pat']
        ]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err
        });
    });
};

//Give Counts
exports.verifyQuoter = (req, res) => {
    municipality = req.params.municipality;
    enterprise = req.params.enterprise;
    salary = req.params.salary;
    if (enterprise == 'TODO') {
        mainch.findAndCountAll({
            attributes: ["id", "aplica", "precalif"],
            where: { nombremunicipio: { [Op.like]: municipality + '%' }, sal_base: { [Op.like]: '%' + salary + '%' } }
        }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err
            });
        });
    }

    else {
        mainch.findAndCountAll({
            attributes: ["id", "aplica", "precalif"],
            where: { nombremunicipio: { [Op.like]: municipality + '%' }, nom_pat: { [Op.iRegexp]: enterprise }, sal_base: { [Op.like]: '%' + salary + '%' } }
        }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err
            });
        });
    }

};
//Setup Priory
exports.prioryData = (req, res) => {
    const user = req.params.username;
    const municipio = req.body.byMun;
    const empresa = req.body.byEnterprise;
    const salario = req.body.bySalary;

    if(empresa == "TODO"){
        mainch.update(
            { priority: user },
            { where: { nombremunicipio: municipio, sal_base: { [Op.like]: '%' + salario + '%' }}}
        ).then(data => {
            if (data != 0) {
                res.sendStatus(200);
            }
            else {
                res.sendStatus(500);
            }
        }).catch(err => {
            res.status(500).send({
                message: err
            });
        }); 
    }

    else{
        mainch.update(
            { priority: user },
            { where: { nombremunicipio: municipio, empresa: {[Op.like]:  '%'+empresa+'%' } , sal_base: { [Op.like]: '%' + salario + '%' }}}
        ).then(data => {
            if (data != 0) {
                res.sendStatus(200);
            }
            else {
                res.sendStatus(500);
            }
        }).catch(err => {
            res.status(500).send({
                message: err
            });
        });
    }
    
};






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
        attributes: ['id', 'nom_aseg', 'curp', 'calle', 'int', 'ext', 'colonia', 'cp', 'nombreentidad', 'nombremunicipio'],
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