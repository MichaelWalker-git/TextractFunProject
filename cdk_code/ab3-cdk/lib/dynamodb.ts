import * as cdk from '@aws-cdk/core';
import * as dynamodb from "@aws-cdk/aws-dynamodb"

export class DBTables extends cdk.Construct {
    public readonly audiosTable: dynamodb.Table;

    constructor(scope: cdk.Construct, id: string) {
        super(scope, id);

        this.audiosTable = new dynamodb.Table(scope, 'DocumentTable', {
            partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
            billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
        });
    }
}