const welcome = require("../routes/welcome");
const express = require("express");
// const err = require("../middlewares/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/", welcome);
//   app.use(err);
};

/** RESTful api naming convention
 * GET /cars
 * GET /cars/:id
 * POST /cars
 * PUT /cars/:id
 * DELETE /cars/:id
 */
