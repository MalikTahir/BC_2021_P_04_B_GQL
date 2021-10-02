import * as AWS from "aws-sdk"
import User from "../Types/User"
const ddbTable = new AWS.DynamoDB.DocumentClient()

export default async function addAuthor(name:any,user:User) {
    const params = {
        TableName:name,
        Item:user
    }
    try{
        const res = ddbTable.put(params).promise()
        return (await res).Attributes
    }catch(error){
        return error
    }
}