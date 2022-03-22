import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface BookAttributes{
    id: string;
    name: string;
    author: string;
    genre: string;
    synopsis: string;
}

export interface IMsSqlBook extends Optional<BookAttributes,'id'>{}
