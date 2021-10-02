import * as AWS from "aws-sdk"
const ddbTable = new AWS.DynamoDB.DocumentClient()
export default async function getUser(name:any,id:string) {
    const params = {
        TableName:name,
        Key:{
            Type:"User",
            id:id
        }
    }
    try{
        const res = await ddbTable.get(params).promise();
        return res.Item
    }catch(error){
        return error
    }
}
