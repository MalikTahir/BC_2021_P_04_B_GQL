import * as AWS from "aws-sdk"
const table = new AWS.DynamoDB.DocumentClient();

export async function getAll(param:any) {
    const params={
        TableName:param,
    }
    try{
        const responce = await table.scan(params).promise()
        return responce.Items
    }
    catch(error)
    {
        return error
    }
    
}