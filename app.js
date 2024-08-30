require("dotenv").config(); // Para usar variables de entorno
const express = require("express");
const connectDB = require("./config/database");
const peopleRoutes = require("./routes/peopleRoutes");
const { jsonErrorHandler } = require("./middlewares/validateJsonContent");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.send(
    "Framework API working!!1!!1 Now try to make some http requests (｡•̀ᴗ-)✧"
  );
});

app.use(express.json());

app.use(jsonErrorHandler);

app.use("/people", peopleRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Path not found (o_O)??? but hey!! there is a kitty ᓚ₍ ^. .^₎",
  });
});

app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
});
