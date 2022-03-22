import { IbookRepository } from "../../repositories/IBookRepository";


export class SearchBookByIdUseCase{
    constructor(
     private bookRepository: IbookRepository
    ){}
    
    async execute(id: string){
        
      return await this.bookRepository.findById(id);
    }
}