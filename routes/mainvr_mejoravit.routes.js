const controller = require("../controllers/mainvr_mejoravit.controller");

module.exports = function(app) {

    app.post("/api/mejoravit/mainvr/updateOrCreate/", controller.updateOrCreate);


}