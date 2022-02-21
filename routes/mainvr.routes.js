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
        "/api/db/mainvr/updater/:id",
        controller.updater
    );

}