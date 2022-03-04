const controller = require("../controllers/mainvr.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

    app.post(
        "/api/mainnl/upData/",
        controller.upData
    );

    app.get(
        "/api/mainnl/getByCurp/:curp",
        controller.findByCurp
    );

    app.get(
        "/api/mainnl/findByRange/:lower/:higher",
        controller.findByRange
    );

    app.put(
        "/api/mainnl/updatePrecalif/:id",
        controller.updatePrecalif
    );

    app.get(
        "/api/mainnl/getAllApply/",
        controller.getAllApply
    );

}