const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./src/config/config");
const PORT = config.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const roleRoutes = require("./src/routes/RoleRoutes");
const userRoute = require("./src/routes/UserRoutes");

app.use("/api/role", roleRoutes);
app.use("/api/user", userRoute);

mongoose
  .connect(config.DB_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
