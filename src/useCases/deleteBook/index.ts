import { MsSqlBookRepository } from "../../repositories/implementations/MsSqlBookRepository";
import { DeleteBookController } from "./DeleteBookController";
import { DeleteBookUseCase } from "./DeleteBookUseCase";


const msSqlBookRepository = new MsSqlBookRepository();

const deleteBookUseCase = new DeleteBookUseCase(msSqlBookRepository);

const deleteBookController = new DeleteBookController(deleteBookUseCase);

export{deleteBookUseCase, deleteBookController}