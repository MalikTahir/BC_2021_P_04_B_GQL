import * as AWS from "aws-sdk"
const ddbTable = new AWS.DynamoDB.DocumentClient()

export default async function updateOrderStatus(name:any,id:string,newStatus:string) {

    const params = {
        TableName : name,
        Key:{
            Type:"Order",
            id:id
        },
        UpdateExpression: "set #status = :status",
        ExpressionAttributeNames : { "#status" : "status"},
        ExpressionAttributeValues : { ":status" : newStatus}
    }
    try{
        await ddbTable.update(params).promise()
        return "Order Status Updated Successfully"
    }catch(error){
        return error
    }
    
}