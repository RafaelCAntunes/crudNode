import { uuid } from "uuidv4";

export class Book {
    public readonly id: string | undefined;
    public  name: string;
    public  author: string;
    public  genre: string;
    public  synopsis: string;

    constructor(props: Omit<Book,'id'>, id?: string){
        this.name = props.name;
        this.author = props.author;
        this.genre = props.genre;
        this.synopsis = props.synopsis;

        if(!id){
            this.id = uuid();
        }
    };
}