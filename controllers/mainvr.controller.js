const db = require("../models");
const Mainvr = db.mainvr;
const User = db.user;
const Op = db.Sequelize.Op;

//Functions
/*
attributes: [
    'del_orig', 
    'sub_del', 
    'umf', 
    'reg_patron', 
    'num_seg_so', 
    'nom_aseg', 
    'tp_mov_ini', 
    'f_mov_ini', 
    'tp_mov_fin', 
    'f_mov_fin', 
    'sal_base', 
    'curp', 
    'reg_patro2', 
    'cve_unica',
    'cve_hom_rf',
    'cve_del',
    'subdeleg',
    'nom_pat',
    'nuevocpo',
    'dom_pat',
    'loc_pat',
    'cod_post',
    'giro',
    'f_movto',
    'base',
    'cve',
    'edad',
    'nombre',
    'paterno',
    'materno',
    'fecnac',
    'sexo',
    'calle',
    'int',
    'ext',
    'colonia',
    'cp',
    'e',
    'd',
    'm',
    's',
    'l',
    'mza',
    'consec',
    'cred',
    'folio',
    'nac',
    'id',
    'superId',
    'montolinea4',
    'montolinea2',
    'descMensual',
    'aplica',
    'excepcion',
    'precalif',
    'direccion',
    'anotacion'
]


*/
//Find All
exports.search = (req, res) => {
    Mainvr.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err
        });
    });
};