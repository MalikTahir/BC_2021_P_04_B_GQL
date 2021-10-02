import * as AWS from "aws-sdk"
const dbTable = new AWS.DynamoDB.DocumentClient()

export const getBook = async (name:any,isn:string)=>{
    const params = {
        TableName:name,
        Key:{
            Type:"Book",
            id:isn
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