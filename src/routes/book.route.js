const express = require("express");
const {
  getAllBook,
  getBookById,
  insertBook,
} = require("../controllers/book.controller");

const router = express.Router();

router
  .get("/books", getAllBook)
  .get("/books/:id", getBookById)
  .post("/books", insertBook);

module.exports = router;
