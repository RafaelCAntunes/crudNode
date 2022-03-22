import { Book } from "../../entities/Book";
import { IbookRepository } from "../../repositories/IBookRepository";
import { IUpdateBookDTO } from "./IUpdateBookDTO";

export class UpdateBookUseCase{
    constructor(
     private bookRepository: IbookRepository
    ){}
    
    async execute(data: IUpdateBookDTO){
        
        const book = new Book(data);

        await this.bookRepository.update(book);
    }
}