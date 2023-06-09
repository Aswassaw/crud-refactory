require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { failed } = require("./utils/createResponse");

// deklarasi express
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// root router
app.get("/", (req, res) =>
  res.send(
    `${process.env.APP_NAME} API - ${
      process.env.NODE_ENV[0].toUpperCase() + process.env.NODE_ENV.slice(1)
    }`
  )
);
// main router
app.use(require("./routes/book.route"));
// 404 router
app.use((req, res) => {
  failed(res, {
    code: 404,
    payload: "Resource on that url not found",
    message: "Not Found",
  });
});

// running server
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT} with ${process.env.NODE_ENV} environment`);
  console.log(`Visit http://localhost:${process.env.PORT}`);
  console.log("Developed by Andry Pebrianto");
});
