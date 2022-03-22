import { DataTypes, Model } from "sequelize/types";
import sequelizeConnection from "../../config";
import { IMsSqlBook } from "../IMsSqlBook";

class MsSqlBook extends Model<IMsSqlBook> {
    id!: string;
    name!: string;
    author!: string;
    genre!: string;
    synopsis!: string

}

MsSqlBook.init({
    id:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false
    },
    genre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    synopsis:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize: sequelizeConnection,
    paranoid: true    

})

export default MsSqlBook