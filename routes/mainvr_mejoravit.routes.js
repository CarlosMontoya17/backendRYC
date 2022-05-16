const controller = require("../controllers/mainvr_mejoravit.controller");

module.exports = function(app) {

    app.post("/api/cotizer/updateOrCreate/", controller.updateOrCreate);


}