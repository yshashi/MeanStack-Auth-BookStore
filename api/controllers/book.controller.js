import Book from "../models/Book.js";
import { CreateError } from "../utils/error.js"
import { CreateSuccess } from "../utils/success.js";

export const getBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        return next(CreateSuccess(200, "All Books Fetched", books));
    } catch (error) {
        return next(CreateError(500, "Internal Server Error!"));
    }
}