import { Book } from "../entities/Book";

export interface IbookRepository{
    save(book: Book): Promise<void>;
    update(book: Book): Promise<void>;
    findById(id : string): Promise<Book>;
    findAll(): Promise<Book[]>;
    delete(id: string) : Promise<void>;
}