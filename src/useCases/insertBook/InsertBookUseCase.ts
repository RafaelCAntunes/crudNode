import { Book } from "../../entities/Book";
import { IbookRepository } from "../../repositories/IBookRepository";
import { IInsertBookDTO } from "./IInsertBookDTO";

export class InsertBookUseCase{
    constructor(
     private bookRepository: IbookRepository
    ){}
    
    async execute(data: IInsertBookDTO){
        
        const book = new Book(data);

        await this.bookRepository.save(book);
    }
}