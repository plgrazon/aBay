const Sequelize = require("sequelize");

const db = new Sequelize("frontend_capstone", "colemichaels", "", {
  dialect: "postgresql"
});

db.authenticate()
  .then(() => console.log("Database connection established"))
  .catch(err => console.error("Unable to connect to database:", err));

module.exports.db = db;
