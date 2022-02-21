module.exports = (sequelize, Sequelize) => {
    const mainvr = sequelize.define('mainvr', {
       del_orig: {
           type: Sequelize.STRING
       },
       sub_del: {
           type: Sequelize.STRING
       },
       umf: {
           type: Sequelize.STRING
       },
       reg_patron: {
           type: Sequelize.STRING
       },
       num_seg_so: {
           type: Sequelize.STRING
       },
       nom_aseg: {
           type: Sequelize.STRING
       },
       tp_mov_ini: {
           type: Sequelize.STRING
       },
       f_mov_ini: {
           type: Sequelize.STRING
       },
       tp_mov_fin: {
           type: Sequelize.STRING
       },
       f_mov_fin: {
           type: Sequelize.STRING
       },
       sal_base: {
           type: Sequelize.STRING
       },
       curp: {
           type: Sequelize.STRING
       },
       reg_patro2: {
           type: Sequelize.STRING
       },
       cve_unica: {
           type: Sequelize.STRING
       },
       cve_hom_rf: {
           type: Sequelize.STRING
       },
       cve_del: {
           type: Sequelize.STRING
       },
       subdeleg: {
           type: Sequelize.STRING
       },
       nom_pat: {
           type: Sequelize.STRING
       },
       nuevocpo: {
           type: Sequelize.STRING
       },
       dom_pat: {
           type: Sequelize.STRING
       },
       loc_pat: {
           type: Sequelize.STRING
       },
       cod_post: {
           type: Sequelize.STRING
       },
       giro: {
           type: Sequelize.STRING
       },
       f_movto: {
           type: Sequelize.STRING
       },
       tp_movto: {
           type: Sequelize.STRING
       },
       base: {
           type: Sequelize.STRING
       },
       cve: {
           type: Sequelize.STRING
       },
       edad: {
           type: Sequelize.STRING
       },
       nombre: {
           type: Sequelize.STRING
       },
       paterno: {
           type: Sequelize.STRING
       },
       materno: {
           type: Sequelize.STRING
       },
       fecnac: {
           type: Sequelize.STRING
       },
       sexo: {
           type: Sequelize.STRING
       },
       calle: {
           type: Sequelize.STRING
       },
       int: {
           type: Sequelize.STRING
       },
       ext: {
           type: Sequelize.STRING
       },
       colonia: {
           type: Sequelize.STRING
       },
       cp: {
           type: Sequelize.STRING
       },
       e: {
           type: Sequelize.STRING
       },
       d: {
           type: Sequelize.STRING
       },
       m: {
           type: Sequelize.STRING
       },
       s: {
           type: Sequelize.STRING
       },
       l: {
           type: Sequelize.STRING
       },
       mza: {
           type: Sequelize.STRING
       },
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
       id2: {
           type: Sequelize.STRING
       },
       superId: {
           type: Sequelize.STRING
       },
       montolinea4: {
           type: Sequelize.STRING
       },
       montolinea2: {
           type: Sequelize.STRING
       },
       descmensual: {
           type: Sequelize.STRING
       },
       aplica: {
           type: Sequelize.STRING
       },
       excepcion: {
           type: Sequelize.STRING
       },
       precalif: {
           type: Sequelize.STRING
       },
       liga: {
           type: Sequelize.STRING
       },
       anotacion: {
           type: Sequelize.STRING
       },
       nombreentidad: {
           type: Sequelize.STRING
       },
       nombremunicipio: {
           type: Sequelize.STRING
       },
       id: {
           type: Sequelize.INTEGER
       }        
    });
    return mainvr;
};