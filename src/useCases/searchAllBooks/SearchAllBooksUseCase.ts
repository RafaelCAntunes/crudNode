import { IbookRepository } from "../../repositories/IBookRepository";


export class SearchAllBooksUseCase{
    constructor(
     private bookRepository: IbookRepository
    ){}
    
    async execute(){
        
      return await this.bookRepository.findAll();
    }
}