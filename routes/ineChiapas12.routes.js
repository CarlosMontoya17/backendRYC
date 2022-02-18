const controller = require("../controllers/inechiapas12.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/db/ineChiapas12/get/direccion/:curp",
    controller.getDireccion
  );

  app.get(
    "/api/db/ineChiapas12/findAll",
    controller.getAll
  );

  app.get(
    "/api/db/ineChiapas12/getByCond/:dat",
    controller.getByCond
  );


};