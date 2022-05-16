module.exports = (sequelize, Sequelize) => {
    const mainvr_mejoravit = sequelize.define('mainvr_mejoravit', {
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
    }, {freezeTableName: true});

    return mainvr_mejoravit;
}