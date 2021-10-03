import * as AWS from "aws-sdk"
import Order from "../../Types/Order"
const ddbTable = new AWS.DynamoDB.DocumentClient()

export default async function Order(name:any,order:Order) {
    const params = {
        TableName:name,
        Item:order
    }
    try{
        const res = ddbTable.put(params).promise()
        return (await res).Attributes
    }catch(error){
        return error
    }
}