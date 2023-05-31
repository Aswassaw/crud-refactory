const express = require("express");
const { getAllBook, getBookById } = require("../controllers/book.controller");

const router = express.Router();

router.get("/books", getAllBook).get("/books/:id", getBookById);

module.exports = router;
