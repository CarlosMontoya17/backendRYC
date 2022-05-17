const controller = require("../controllers/mainch_mejoravit.controller");

module.exports = function(app) {

    app.post("/api/mejoravit/mainch/updateOrCreate/", controller.updateOrCreate);


}