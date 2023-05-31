const express = require("express");
const {
  getAllBook,
  getBookById,
  insertBook,
  updateBookById,
  deleteBookById,
} = require("../controllers/book.controller");

const router = express.Router();

router
  .get("/books", getAllBook)
  .get("/books/:id", getBookById)
  .post("/books", insertBook)
  .put("/books/:id", updateBookById)
  .delete("/books/:id", deleteBookById);

module.exports = router;
