import * as AWS from "aws-sdk"
const ddbTable  = new AWS.DynamoDB.DocumentClient()

export default async function deleteAuthor(name:any,id:string) {

    const params = {
        TableName : name,
        Key : {
            Type:"Author",
            id:id
        }
    }
    try {
        await ddbTable.delete(params).promise();
        return " Author deleted Successfully "
    }catch(error){
        return `Error deleting Author ${id} \n ${error}`
    }
    
}