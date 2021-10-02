import * as AWS from "aws-sdk"
const ddbTable  = new AWS.DynamoDB.DocumentClient()

export default async function deleteAuthor(name:any,id:string) {

    const params = {
        TableName : name,
        Key : {
            Type:"Order",
            id:id
        }
    }
    try {
        await ddbTable.delete(params).promise();
        return " Order deleted Successfully "
    }catch(error){
        return `Error deleting Order ${id} \n ${error}`
    }
    
}