import * as AWS from "aws-sdk"
import Author from "../../Types/Author"
const ddbTable = new AWS.DynamoDB.DocumentClient()

export default async function addAuthor(name:any,author:Author) {
    const params = {
        TableName:name,
        Item:author
    }
    try{
        const res = ddbTable.put(params).promise()
        return res
    }catch(error){
        return error
    }
}