import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import * as s3 from '@aws-cdk/aws-s3'
import * as dynamodb from '@aws-cdk/aws-dynamodb'

import * as apigateway from '@aws-cdk/aws-apigatewayv2'
import {HttpApi} from "@aws-cdk/aws-apigatewayv2";
import {LAMBDA_FUNCTIONS_DIST_FOLDER, SUPPORTED_FILE_SUFFIX} from "../constants";

export interface LambdaFunctionsProps {
  audioFileBucket: s3.Bucket;
  transcribedTextFileBucket: s3.Bucket;
  audiosTable: dynamodb.Table;
}

export class Ab3CdkStack extends cdk.Stack {
  private SUPPORTED_AUDIO_SUFFIX: any;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const commonRuntimeProps = {
      runtime: lambda.Runtime.NODEJS_14_X,
      memorySize: 256,
    };
    const commonEnv = {
      // DB_TABLE_NAME: props.audiosTable.tableName,
    };

    // The code that defines your stack goes here
    const hello = new lambda.Function(this, "TranslateHandler", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: 'translate.handler'
    })


    //
    // const translateDefaultIntegration = new Lambda({
    //   handler: hello,
    // });
    //
    // new HttpApi()
  }
}
