import { MsSqlBookRepository } from "../../repositories/implementations/MsSqlBookRepository";
import { UpdateBookController } from "./UpdateBookController";
import { UpdateBookUseCase } from "./UpdateBookUseCase";

const msSqlBookRepository = new MsSqlBookRepository();

const updateBookUseCase = new UpdateBookUseCase(msSqlBookRepository);

const updateBookController = new UpdateBookController(updateBookUseCase);

export{updateBookUseCase, updateBookController}