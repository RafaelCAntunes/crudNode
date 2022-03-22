import { Request, Response } from "express";
import { SearchBookByIdUseCase } from "./SearchBookByIdUseCase";


export class SearchBookByIdController{
   
    constructor(
        private searchBookByIdUseCase: SearchBookByIdUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
       const id = request.body;
        try{
           const book = await this.searchBookByIdUseCase.execute(id)
            return response.status(201).json(book);
        }
        catch (err){
            return response.status(400).json({err});
        }
        
    }
}