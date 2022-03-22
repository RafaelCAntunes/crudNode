import { MsSqlBookRepository } from "../../repositories/implementations/MsSqlBookRepository";
import { SearchAllBooksController } from "./SearchAllBooksController";
import { SearchAllBooksUseCase } from "./SearchAllBooksUseCase";


const msSqlBookRepository = new MsSqlBookRepository();

const searchAllBooksUseCase = new SearchAllBooksUseCase(msSqlBookRepository);

const searchAllBooksController = new SearchAllBooksController(searchAllBooksUseCase);

export{searchAllBooksUseCase, searchAllBooksController}