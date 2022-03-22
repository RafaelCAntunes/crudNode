import { Request, Response } from "express";
import { SearchAllBooksUseCase } from "./SearchAllBooksUseCase";


export class SearchAllBooksController{
   
    constructor(
        private searchAllBooksUseCase: SearchAllBooksUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
   
        try{
           const books = await this.searchAllBooksUseCase.execute()
            return response.status(201).json(books);
        }
        catch (err){
            return response.status(400).json({err});
        }
        
    }
}