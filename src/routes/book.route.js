const express = require("express");
const { success } = require("../utils/createResponse");
const books = require('../data/books.json');

const router = express.Router();

router.get("/books", (req, res) => {
  success(res, {
    code: 200,
    payload: books,
    message: "Select Books Success",
  });
});

module.exports = router;
