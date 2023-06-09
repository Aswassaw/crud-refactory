const { v4: uuidv4 } = require("uuid");
const { success, failed } = require("../utils/createResponse");

let books = require("../data/books.json");

module.exports = {
  getAllBook: (req, res) => {
    try {
      success(res, {
        code: 200,
        payload: books,
        message: "Select Books Success",
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: "Internal Server Error",
      });
    }
  },
  getBookById: (req, res) => {
    try {
      const { id } = req.params;
      const book = books.filter((book) => book.id === id);

      if (!book.length) {
        failed(res, {
          code: 404,
          payload: `Book With Id ${id} Not Found`,
          message: "Select Book By Id Failed",
        });
        return;
      }

      success(res, {
        code: 200,
        payload: book[0],
        message: "Select Book By Id Success",
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: "Internal Server Error",
      });
    }
  },
  insertBook: (req, res) => {
    try {
      const { author, country, language, pages, title, year, synopsis } = req.body;
      const newBook = {
        id: uuidv4(),
        author,
        country,
        language,
        pages,
        title,
        year,
        synopsis,
      };
      books = [...books, newBook];

      success(res, {
        code: 201,
        payload: null,
        message: "Insert Book Success",
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: "Internal Server Error",
      });
    }
  },
  updateBookById: (req, res) => {
    try {
      const { id } = req.params;
      const { author, country, language, pages, title, year, synopsis } = req.body;

      const book = books.filter((book) => book.id === id);

      if (!book.length) {
        failed(res, {
          code: 404,
          payload: `Book With Id ${id} Not Found`,
          message: "Update Book Failed",
        });
        return;
      }

      const newBookUpdate = {
        id,
        author,
        country,
        language,
        pages,
        title,
        year,
        synopsis,
      };
      books = [...books.filter((book) => book.id !== id), newBookUpdate];

      success(res, {
        code: 200,
        payload: null,
        message: "Update Book Success",
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: "Internal Server Error",
      });
    }
  },
  deleteBookById: (req, res) => {
    try {
      const { id } = req.params;

      const book = books.filter((book) => book.id === id);

      if (!book.length) {
        failed(res, {
          code: 404,
          payload: `Book With Id ${id} Not Found`,
          message: "Delete Book Failed",
        });
        return;
      }

      books = [...books.filter((book) => book.id !== id)];

      success(res, {
        code: 200,
        payload: null,
        message: "Delete Book Success",
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: "Internal Server Error",
      });
    }
  },
};
