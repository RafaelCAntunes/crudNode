import { Request, Response } from "express";
import { InsertBookUseCase } from "./InsertBookUseCase";

export class InsertBookController{
   
    constructor(
        private insertBookUseCase: InsertBookUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const {name, author, genre, synopsis} = request.body;

        try{
            await this.insertBookUseCase.execute({name, author, genre, synopsis})
            return response.status(201).send();
        }
        catch (err){
            return response.status(400).json({err});
        }
        
    }
}