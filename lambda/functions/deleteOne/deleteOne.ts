import *as AWS from "aws-sdk"
const dbTable = new AWS.DynamoDB.DocumentClient()

export  const deleteOne = async (name:any,isn:string)=>{

    const params ={
        TableName : name,
        Key:{
            isn:isn
        }
    }
    try{
        const res = await dbTable.delete(params).promise()
        return res
    }   
    catch(error){
        return error
    }
}