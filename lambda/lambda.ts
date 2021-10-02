import * as AWS from "aws-sdk"
const dataTable = new AWS.DynamoDB.DocumentClient()
import {addOne} from "./functions/addOne/addOne"
import Book from "./functions/Types/Book"
import { deleteOne } from "./functions/deleteOne/deleteOne"
import { getAll } from "./functions/getAll/getAll"
import { getOne } from "./functions/getOne/getOne"
import updateOne from './functions/updateOne/updateOne'
import addAuthor from "./functions/addAuthor/addAuthor"
import Author from "./functions/Types/Author"
type AppSyncEvent  ={
    info:{
        fieldName:string
    }
    arguments:{
        isn:string,
        book:Book,
        author:Author
    }
}
exports.handler = async (event:AppSyncEvent)=>{
    const tName = process.env.TABLE_NAME
    
       }

