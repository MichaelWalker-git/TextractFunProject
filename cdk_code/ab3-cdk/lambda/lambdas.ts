
import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda');
import s3 = require('@aws-cdk/aws-s3');
import dynamodb = require('@aws-cdk/aws-dynamodb');
import {
    S3EventSource,
} from '@aws-cdk/aws-lambda-event-sources';

import {
    LAMBDA_FUNCTIONS_DIST_FOLDER, SUPPORTED_FILE_SUFFIX,
} from '../constants';

export interface LambdaFunctionsProps {
    audioFileBucket: s3.Bucket;
    transcribedTextFileBucket: s3.Bucket;
    audiosTable: dynamodb.Table;
}

export class LambdaFunctions extends cdk.Construct {
    public readonly getUploadTokenFunc: lambda.Function;
    public readonly addAudioFunc: lambda.Function;
    public readonly getAudiosFunc: lambda.Function;
    public readonly transcribeAudioFunc: lambda.Function;

    private props: LambdaFunctionsProps;
    constructor(scope: cdk.Construct, id: string, props: LambdaFunctionsProps) {
        super(scope, id);
        this.props = props;

        this.getUploadTokenFunc = new lambda.Function(scope, 'GetUploadToken', {
            ...commonRuntimeProps,
            description:
                'Function to generate a temporary access credential for frontend to upload file to S3.',
            handler: 'getToken.handler',
            code: lambda.Code.asset(`${LAMBDA_FUNCTIONS_DIST_FOLDER}/getToken`),
            environment: {
                ...commonEnv,
                BUCKET_NAME: props.audioFileBucket.bucketName,
            },
        });

        this.addAudioFunc = new lambda.Function(scope, 'UploadAudio', {
            ...commonRuntimeProps,
            description:
                'Function to insert audio record to DynamoDB after S3 upload.',
            handler: 'newAudio.handler',
            code: lambda.Code.asset(`${LAMBDA_FUNCTIONS_DIST_FOLDER}/newAudio`),
            environment: {
                ...commonEnv,
                SNS_TOPIC: props.newAudioTopic.topicArn,
            },
        });

        SUPPORTED_FILE_SUFFIX.forEach(suffix => {
            this.addAudioFunc.addEventSource(
                new S3EventSource(props.audioFileBucket, {
                    events: [s3.EventType.OBJECT_CREATED],
                    filters: [{suffix}],
                })
            );
        });

        this.getAudiosFunc = new lambda.Function(scope, 'GetAudios', {
            ...commonRuntimeProps,
            description: 'Function to get audio from DynamoDB.',
            handler: 'getAudios.handler',
            code: lambda.Code.asset(
                `${LAMBDA_FUNCTIONS_DIST_FOLDER}/getAudios`
            ),
            environment: {
                ...commonEnv,
            },
        });

        this.transcribeAudioFunc = new lambda.Function(
            scope,
            'TranscribeAudio',
            {
                ...commonRuntimeProps,
                description:
                    'Function to transcribe audio to text using Amazon Transcribe.',
                handler: 'transcribeAudio.handler',
                code: lambda.Code.asset(
                    `${LAMBDA_FUNCTIONS_DIST_FOLDER}/transcribeAudio`
                ),
                environment: {
                    ...commonEnv,
                    OUTPUT_BUCKET_NAME:
                    props.transcribedTextFileBucket.bucketName,
                },
            });
    }
}