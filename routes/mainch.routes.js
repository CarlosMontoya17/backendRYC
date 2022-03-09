const controller = require("../controllers/mainch.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
//Chiapas
    app.post(
        "/api/mainch/upData/",
        controller.upData
    );
    
//Quoter
    //Give Municipality
    app.get(
        "/api/mainch/giveMunicipality/",
        controller.giveMunicipality
    );
    //Give Enterprises
    app.get(
        "/api/mainch/giveEnterprises/",
        controller.giveEnterprisses
    );
    //Priory
    app.put(
        "/api/mainch/prioryData/:username",
        controller.prioryData
    );
    //Give Counts
    app.get(
        "/api/mainch/giveCounts/:municipality/:enterprise/:salary",
        controller.verifyQuoter
    );

    app.get(
        "/api/mainch/getByCurp/:curp",
        controller.findByCurp
    );

    app.get(
        "/api/mainch/findByRange/:lower/:higher",
        controller.findByRange
    );

    app.put(
        "/api/mainch/updatePrecalif/:id",
        controller.updatePrecalif
    );

    app.get(
        "/api/mainch/getAllApply/",
        controller.getAllApply
    );

}