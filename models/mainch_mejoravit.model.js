module.exports  = (sequelize, Sequelize) => {
    const mainch_mejoravit = sequelize.define("mainch_mejoravit", {
        id_user:{ 
            type: Sequelize.INTEGER
        },
        details: {
            type: Sequelize.TEXT
        },
        thirty_credit: {
            type: Sequelize.DOUBLE
        },
        thirty_month: {
            type: Sequelize.DOUBLE
        },
        twenty_credit: {
            type: Sequelize.DOUBLE
        },
        twenty_month: {
            type: Sequelize.DOUBLE
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        aplica: {
            type: Sequelize.TEXT
        }


    }, {freezeNameTable:true});
    return mainch_mejoravit;
}