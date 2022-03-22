import { Request, Response } from "express";
import { UpdateBookUseCase } from "./UpdateBookUseCase";

export class UpdateBookController{
   
    constructor(
        private updateBookUseCase: UpdateBookUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const {id,name, author, genre, synopsis} = request.body;

        try{
            await this.updateBookUseCase.execute({id,name, author, genre, synopsis})
            return response.status(204).send();
        }
        catch (err){
            return response.status(400).json({err});
        }
        
    }
}