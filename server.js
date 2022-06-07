const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.use(express.json());
require("./routes/users.routes")(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
