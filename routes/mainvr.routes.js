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
        "/api/mainvr/upData/",
        controller.upData
    );

    app.get(
        "/api/mainvr/getByCurp/:curp",
        controller.findByCurp
    );

    app.get(
        "/api/mainvr/findByRange/:lower/:higher",
        controller.findByRange
    );

    app.put(
        "/api/mainvr/updatePrecalif/:id",
        controller.updatePrecalif
    );

    app.get(
        "/api/mainvr/getAllApply/",
        controller.getAllApply
    );

}