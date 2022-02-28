const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    rol : req.body.rol
  })
    .then(user => {
      res.send({ message: "User was registered successfully" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  //console.log(bcrypt.hashSync(req.body.password, 8))
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    //console.log(bcrypt.hashSync(req.body.password, 8));

    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
      
    if (!passwordIsValid) { 
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // 24 hours
    });

    res.status(200).send({
      id: user.id,
      username: user.username,
      rol: user.rol,
      avatar: user.avatar,
      accessToken: token,
      precalifData: user.precalifData
    });
  }).catch(err => {
    res.status(500).send({ message: err.message });
    console.log(err)
  });
};


exports.hasher = (req,res) => {
  const textPlane = "Ezuart22&";
  const hash = bcrypt.hashSync(textPlane, 8);
  res.send(hash);
};