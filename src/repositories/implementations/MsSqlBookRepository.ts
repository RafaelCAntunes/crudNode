import MsSqlBook from "../../database/models/Implementations/MsSqlBook";
import { IMsSqlBook } from "../../database/models/IMsSqlBook";
import { Book } from "../../entities/Book";
import { IbookRepository } from "../IBookRepository";

export class MsSqlBookRepository implements IbookRepository{

    async save(book: Book): Promise<void> {
       try{
        const msBook: IMsSqlBook = book;
        await MsSqlBook.create(msBook);
       } 
       catch(e){
        throw new Error('failed to insert new book')
       }
    }

    async findAll(): Promise<Book[]> {
       
       return MsSqlBook.findAll(); 
    }

    async findById(id: string): Promise<Book> {
       
        const book = await MsSqlBook.findByPk(id)
        if (!book) {
            throw new Error('book not found')
        }

        return book;
        
        
    }

    async update(book: Book): Promise<void> {
        try{
            const bookToUpdate = await MsSqlBook.findByPk(book.id)
    if (!bookToUpdate) {
        // @todo throw custom error
        throw new Error('not found')
    }
     await (bookToUpdate as MsSqlBook).update(book)
        }
        catch(e){
            throw new Error('not found')
        }
        
    }

    async delete(id: string): Promise<void> {
        try{
            await MsSqlBook.destroy({
            where: {id}
            })
        }
        catch(e){
            throw new Error('could not delete the book')
        }
    }

}