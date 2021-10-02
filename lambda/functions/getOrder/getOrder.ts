import * as AWS from "aws-sdk"
const dbTable = new AWS.DynamoDB.DocumentClient()

export default async function getOrder (name:any,id:string){
    const params = {
        TableName:name,
        Key:{
            Type:"Order",
            id:id
        }
    }
    try {
        const res = await dbTable.get(params).promise();
        return res.Item
    }
    catch(error){
        return error
    }
}