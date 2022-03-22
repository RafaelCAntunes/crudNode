import { Router } from "express";
import { deleteBookController } from "./useCases/deleteBook";
import { insertBookController } from "./useCases/insertBook";
import { searchAllBooksController } from "./useCases/searchAllBooks";
import { searchBookByIdController } from "./useCases/searchBookById";
import { updateBookController } from "./useCases/updateBook";

const router = Router()

router.get('/livros',(request,response) => {
    return searchAllBooksController.handle(request,response);
})

router.get('/livros/{id}',(request,response) => {
    return searchBookByIdController.handle(request,response);
})

router.post('/livros',(request,response) => {
    return insertBookController.handle(request,response);
})

router.put('/livros/{id}',(request,response) => {
    return updateBookController.handle(request,response);
})

router.delete('/livros/{id}',(request,response) => {
    return deleteBookController.handle(request,response);
})



export{router}