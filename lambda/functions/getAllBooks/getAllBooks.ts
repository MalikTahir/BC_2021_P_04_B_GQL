import * as AWS from "aws-sdk"
const table = new AWS.DynamoDB.DocumentClient();

export default async function getAllBooks(name:any) {
    const params={
        TableName:name,
        KeyConditionExpression: `Type = :tp`,
        ExpressionAttributeValues:{
            ':tp' : `Book`
        }
    }
    try{
        const responce = await table.query(params).promise()
        console.log(responce)
        return "success inget all books"
    }
    catch(error)
    {
        return "error in get all books"
    }
    
}