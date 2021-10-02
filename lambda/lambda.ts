import * as AWS from "aws-sdk"
const dataTable = new AWS.DynamoDB.DocumentClient()
import {addBook} from "./functions/addBook/addOne"
import Book from "./functions/Types/Book"
import { deleteOne } from "./functions/deleteOne/deleteOne"
import { getAll } from "./functions/getAll/getAll"
import { getBook } from "./functions/getBook/getBook"
import updateOne from './functions/updateOne/updateOne'
import addAuthor from "./functions/addAuthor/addAuthor"
import addUser from "./functions/addUser/addUser"
import Author from "./functions/Types/Author"
import { anything } from "@aws-cdk/assert"
import getAuthor from "./functions/getAuthor/getAuthor"
import getUser from "./functions/getUser/getUser"
import User from "./functions/Types/User"
type AppSyncEvent  ={
    info:{
        fieldName:string
    }
    arguments:{
        type:string,
        id:string,
        book:Book,
        author:Author
        user: User
    }
}
exports.handler = async (event:AppSyncEvent)=>{
    const tName = process.env.TABLE_NAME;
    switch(event.info.fieldName){
        case "getBook":{return await getBook(tName,event.arguments.id)}
        case "getAuthor":{ return await getAuthor(tName,event.arguments.id)}
        case "getUser":{ return await getUser(tName,event.arguments.id)}
        case "addBook":{ return await addBook(tName,event.arguments.book)}
        case "addAuthor":{ return await addAuthor(tName,event.arguments.author)}
        case "addUser":{ return await addUser(tName,event.arguments.user)}
    }
    
}

