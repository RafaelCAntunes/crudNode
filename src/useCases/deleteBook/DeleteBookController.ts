import { Request, Response } from "express";
import { DeleteBookUseCase } from "./DeleteBookUseCase";


export class DeleteBookController{
   
    constructor(
        private deleteBookUseCase: DeleteBookUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
       const id = request.body;
        try{
           await this.deleteBookUseCase.execute(id)
            return response.status(204);
        }
        catch (err){
            return response.status(400).json({err});
        }
        
    }
}