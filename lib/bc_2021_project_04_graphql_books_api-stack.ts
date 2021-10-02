import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import * as ddb from "@aws-cdk/aws-dynamodb"
import * as appsync from "@aws-cdk/aws-appsync"
import { CfnOutput } from '@aws-cdk/core';
import { SortKeyStep } from '@aws-cdk/aws-appsync';

export class Bc2021Project04GraphqlBooksApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Creating data table
    const ddbTable = new ddb.Table(this,"BC_2021_GQL_Table",{
    partitionKey:{
      name:"Type",
      type:ddb.AttributeType.STRING
    },
    sortKey:{
      name:"id",
      type:ddb.AttributeType.STRING
    }
    })
    // creating a lambda function 
    const lambdaFn = new lambda.Function(this,"BC_2021_GQL-Lambda",{
      runtime:lambda.Runtime.NODEJS_12_X,
      code:lambda.Code.fromAsset(`lambda`),
      handler:"lambda.handler",
      environment:{
        TABLE_NAME:ddbTable.tableName!
      }
    })    
    // AppSync API
    const api =new appsync.GraphqlApi(this,"BC_2021_API",{
      name:"BC_2021_API",
      schema: appsync.Schema.fromAsset(`graphql/schema.gql`),
    })
    const dataSource = api.addLambdaDataSource("Lambda_Datasource", lambdaFn)
    ddbTable.grantFullAccess(lambdaFn)

    dataSource.createResolver({
      typeName:"Query",
      fieldName:"getAll"
    })


  }
}
