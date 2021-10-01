import * as AWS from "aws-sdk"
import { table } from "console"
const ddbTable = new AWS.DynamoDB.DocumentClient()
import Book from './Book'
type ParamInput = {
    TableName: string ,
    Key:{},
    ExpressionAttributeValues: any,
    ExpressionAttributeNames: any,
    UpdateExpression: string,
    ReturnValues: string
}
export default async function updateOne(name:any,Item1:any) {

    let params:ParamInput = {
        TableName:name,
        Key:{
            isn:Item1.isn
        },
        UpdateExpression:"",
        ExpressionAttributeNames:{},
        ExpressionAttributeValues:{},
        ReturnValues:"UPDATED_NEW"
    }
    const attributes = Object.keys(Item1)
    let prefix = "set "
    for(let i =0; i < attributes.length ; i++){
        let attribute = attributes[i]
        if(attribute !== "isn"){
            params["UpdateExpression"] += prefix + "#" + attribute + " = :" + attribute;
            params["ExpressionAttributeValues"][":" + attribute] = Item1[attribute];
            params["ExpressionAttributeNames"]["#" + attribute] = attribute;
            prefix = ", ";
        }
    }
    try{
        const res = await ddbTable.update(params).promise()
        return res;
    }catch(error){
        return error
    }
}