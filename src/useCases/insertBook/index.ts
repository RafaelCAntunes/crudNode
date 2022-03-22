import { MsSqlBookRepository } from "../../repositories/implementations/MsSqlBookRepository";
import { InsertBookController } from "./InsertBookController";
import { InsertBookUseCase } from "./InsertBookUseCase";

const msSqlBookRepository = new MsSqlBookRepository();

const insertBookUseCase = new InsertBookUseCase(msSqlBookRepository);

const insertBookController = new InsertBookController(insertBookUseCase);

export{insertBookUseCase, insertBookController}