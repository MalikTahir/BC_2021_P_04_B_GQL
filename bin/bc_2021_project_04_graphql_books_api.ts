#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Bc2021Project04GraphqlBooksApiStack } from '../lib/bc_2021_project_04_graphql_books_api-stack';

const app = new cdk.App();
new Bc2021Project04GraphqlBooksApiStack(app, 'Bc2021Project04GraphqlBooksApiStack');
