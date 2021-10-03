import * as AWS from "aws-sdk"
import {addBook} from "./functions/addBook/addOne"
import Book from "./functions/Types/Book"
import { deleteBook } from "./functions/deleteBook/deleteOne"
import  getAllBooks from "./functions/getAllBooks/getAllBooks"
import { getBook } from "./functions/getBook/getBook"
import updateBook from './functions/updateBook/updateBook'
import updatAuthor from "./functions/updateAuthor/updateAuthor"
import updateOrder from "./functions/updateOrder/updateOrder"
import updateUser from "./functions/updateUser/updateUser"
import addAuthor from "./functions/addAuthor/addAuthor"
import addUser from "./functions/addUser/addUser"
import addOrder from "./functions/addOrder/addOrder"
import Author from "./functions/Types/Author"
import getAuthor from "./functions/getAuthor/getAuthor"
import getUser from "./functions/getUser/getUser"
import getOrder from "./functions/getOrder/getOrder"
import User from "./functions/Types/User"
import Order from "./functions/Types/Order"
import deleteAuthor from "./functions/deleteAuthor/deleteAuthor"
import deleteUser from "./functions/deleteUser/deleteUser"
import deleteOrder from "./functions/deleteOrder/deleteOrder"
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
        order:Order
    }
}
exports.handler = async (event:AppSyncEvent)=>{
    const tName = process.env.TABLE_NAME;
    switch(event.info.fieldName){
        case "getBook" : { return await getBook(tName,event.arguments.id)}
        case "getAllBooks" : { return await getAllBooks(tName)}
        case "getAuthor" : { return await getAuthor(tName,event.arguments.id)}
        case "getUser" : { return await getUser(tName,event.arguments.id)}
        case "getOrder" : { return await getOrder(tName,event.arguments.id)}
        case "addBook" : { return await addBook(tName,event.arguments.book)}
        case "addAuthor" : { return await addAuthor(tName,event.arguments.author)}
        case "addUser" : { return await addUser(tName,event.arguments.user)}
        case "addOrder" : { return await addOrder(tName,event.arguments.order)}
        case "updateBook" : { return await updateBook(tName,event.arguments.book)}
        case "updateAuthor" : { return await updatAuthor(tName,event.arguments.author)}
        case "updateUser" : { return await updateUser(tName,event.arguments.user)}
        case "updateOrder" : { return await updateOrder(tName,event.arguments.order)}
        case "deleteBook" : { return await deleteBook(tName,event.arguments.id)}
        case "deleteAuthor" : { return await deleteAuthor(tName,event.arguments.id)}
        case "deleteUser" : { return await deleteUser(tName,event.arguments.id)}
        case "deleteOrder" : { return await deleteOrder(tName,event.arguments.id)}
    }
    
}

