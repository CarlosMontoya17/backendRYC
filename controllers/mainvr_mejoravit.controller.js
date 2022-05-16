const db = require("../models");
const mainvr_mejoravit = db.mainvr_mejoravit; 


exports.updateOrCreate = async (req, res) => {
    const { id_user, details, thirty_credit, thirty_month, twenty_credit, twenty_month, aplica } = req.body;
    const user = await mainvr_mejoravit.findOne({where: { id_user: id_user}});
    if(user == null){
       await mainvr_mejoravit.create({ 
            id_user: id_user, 
            details: details, 
            thirty_credit: thirty_credit,
            thirty_month: thirty_month, 
            twenty_credit: twenty_credit, 
            twenty_month:twenty_month,
            aplica: aplica
         }, { field: [
            "id_user", 
            "details", 
            "thirty_credit", 
            "thirty_month", 
            "twenty_credit", 
            "twenty_month",
            "aplica"
        ]}).then(data => {
            res.status(201).send("Created");
        }).catch(err => {
            res.status(500).send("Internal Error");
        });
    }
    else{
        await mainvr_mejoravit.update({
            details: details, 
            thirty_credit: thirty_credit,
            thirty_month: thirty_month, 
            twenty_credit: twenty_credit, 
            twenty_month:twenty_month,
            aplica: aplica
        }, {where:{id_user: id_user}}).then(data => {
            res.status(200).send("Updated");
        }).catch(err => {
            res.status(500).send("Internal Error");
        });
    }

}