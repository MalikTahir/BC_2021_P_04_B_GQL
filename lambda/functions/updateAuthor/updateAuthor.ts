import * as AWS from "aws-sdk"
const ddbTable = new AWS.DynamoDB.DocumentClient()
type ParamInput = {
    TableName: string ,
    Key:{},
    ExpressionAttributeValues: any,
    ExpressionAttributeNames: any,
    UpdateExpression: string,
    ReturnValues: string
}
export default async function updateAuthor(name:any,Item1:any) {

    let params:ParamInput = {
        TableName:name,
        Key:{
            Type:"Author",
            id:Item1.id
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
        if(attribute !== "id" && attribute !== "Type"){
            params["UpdateExpression"] += prefix + "#" + attribute + " = :" + attribute;
            params["ExpressionAttributeValues"][":" + attribute] = Item1[attribute];
            params["ExpressionAttributeNames"]["#" + attribute] = attribute;
            prefix = ", ";
        }
    }
    try{
        const res = await ddbTable.update(params).promise()
        return "Author Updated Successfully"
    }catch(error){
        return error
    }
}