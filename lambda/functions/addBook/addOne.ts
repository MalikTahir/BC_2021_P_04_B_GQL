import * as AWS from "aws-sdk"
import Book from '../Types/Book'
const dbTable = new AWS.DynamoDB.DocumentClient()

export async function addBook (name:any,Item1:Book){

    const params = {
        TableName:name,
        Item:Item1
    }
    try{
        const responce = await dbTable.put(params).promise()
        return "responce"
    }catch(error){
        return error
    }
}