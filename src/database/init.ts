import MsSqlBook from "./models/Implementations/MsSqlBook"

const dbInit = () => {
    MsSqlBook.sync({ alter: true })
  }
  export default dbInit 