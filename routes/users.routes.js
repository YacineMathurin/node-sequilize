module.exports = (app) => {
  const users = require("../controllers/users.controller.js");
  var router = require("express").Router();

  // Retrieve all Tutorials
  router.post("/", users.create);
  router.get("/", users.findAll);

  app.use("/api/users", router);
};
