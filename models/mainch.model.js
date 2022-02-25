module.exports = (sequelize, Sequelize) => {
    const mainch = sequelize.define('mainch', {
        del_orig: {
            type: Sequelize.TEXT
        },
        sub_del: {
            type: Sequelize.TEXT
        },
        umf: {
            type: Sequelize.TEXT
        },
        reg_patron: {
            type: Sequelize.TEXT
        },
        num_seg_so: {
            type: Sequelize.TEXT
        },
        nom_aseg: {
            type: Sequelize.TEXT
        },
        tp_mov_ini: {
            type: Sequelize.TEXT
        },
        f_mov_ini: {
            type: Sequelize.TEXT
        },
        tp_mov_fin: {
            type: Sequelize.TEXT
        },
        f_mov_fin: {
            type: Sequelize.TEXT
        },
        sal_base: {
            type: Sequelize.TEXT
        },
        curp: {
            type: Sequelize.TEXT
        },
        reg_patro2: {
            type: Sequelize.TEXT
        },
        cve_unica: {
            type: Sequelize.TEXT
        },
        cve_hom_rf: {
            type: Sequelize.TEXT
        },
        cve_del: {
            type: Sequelize.TEXT
        },
        subdeleg: {
            type: Sequelize.TEXT
        },
        nom_pat: {
            type: Sequelize.TEXT
        },
        nuevocpo: {
            type: Sequelize.TEXT
        },
        dom_pat: {
            type: Sequelize.TEXT
        },
        loc_pat: {
            type: Sequelize.TEXT
        },
        cod_post: {
            type: Sequelize.TEXT
        },
        giro: {
            type: Sequelize.TEXT
        },
        f_movto: {
            type: Sequelize.TEXT
        },
        tp_movto: {
            type: Sequelize.TEXT
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
        d: {
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
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        priority:{
            type: Sequelize.STRING
        }

    }, {
        freezeTableName: true
    });
    return mainch;
};