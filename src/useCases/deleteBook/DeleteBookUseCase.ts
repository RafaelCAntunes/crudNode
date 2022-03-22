import { IbookRepository } from "../../repositories/IBookRepository";


export class DeleteBookUseCase{
    constructor(
     private bookRepository: IbookRepository
    ){}
    
    async execute(id: string){
        
      return await this.bookRepository.delete(id);
    }
}