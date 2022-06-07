const db = require("../models");
const { validateSignup } = require("../validators/users.validators");
const Users = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt");

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Users.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.create = async (req, res) => {
  // Validate request
  console.log("Req body", req.body);
  const { error } = validateSignup(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  // Create a user
  const salt = await bcrypt.genSalt(10);

  const user = {
    firstname: req.body.firstname,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, salt),
  };
  // Save user in the database
  Users.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};
