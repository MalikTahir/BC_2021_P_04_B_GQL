import * as AWS from "aws-sdk"
const dataTable = new AWS.DynamoDB.DocumentClient()
import {addOne} from "./functions/addOne"
import Book from "./functions/Book"
import { deleteOne } from "./functions/deleteOne"
import { getAll } from "./functions/getAll"
import { getOne } from "./functions/getOne"
import updateOne from './functions/updateOne'
type AppSyncEvent  ={
    info:{
        fieldName:string
    }
    arguments:{
        isn:string,
        book:Book,
    }
}
exports.handler = async (event:AppSyncEvent)=>{
    const tName = process.env.TABLE_NAME
    switch(event.info.fieldName){
        case "getAll":
                return await getAll(tName);
        case "getOne":
                return await getOne(tName,event.arguments.isn)        
        case  "addOne":
                return await addOne(tName,event.arguments.book)             
        case "deleteOne":
            return await deleteOne(tName,event.arguments.isn)   
        case "updateOne":
            return await updateOne(tName,event.arguments.book)               
        default:   
            return null     
    }
    
}

