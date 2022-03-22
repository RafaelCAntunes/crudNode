import { MsSqlBookRepository } from "../../repositories/implementations/MsSqlBookRepository";
import { SearchBookByIdController } from "./SearchBookByIdController";
import { SearchBookByIdUseCase } from "./SearchBookByIdUseCase";


const msSqlBookRepository = new MsSqlBookRepository();

const searchBookByIdUseCase = new SearchBookByIdUseCase(msSqlBookRepository);

const searchBookByIdController = new SearchBookByIdController(searchBookByIdUseCase);

export{searchBookByIdUseCase, searchBookByIdController}