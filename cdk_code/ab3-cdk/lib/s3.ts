import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as s3Deployment from "@aws-cdk/aws-s3-deployment";
import {WEBSITE_DIST_FOLDER} from "../constants";

export class S3Buckets extends cdk.Construct {
    public readonly staticWebsiteBucket: s3.Bucket;
    public readonly documentFileBucket: s3.Bucket;
    public readonly transcribedTextFileBucket: s3.Bucket;
    audioFileBucket: Bucket;

    constructor(scope: cdk.Construct, id: string) {
        super(scope, id);
        this.staticWebsiteBucket = new s3.Bucket(scope, 'StaticWebsiteBucket', {
            websiteIndexDocument: 'index.html',
            websiteErrorDocument: 'index.html',
        });

        this.documentFileBucket = new s3.Bucket(scope, 'DocumentFileBucket');

        this.transcribedTextFileBucket = new s3.Bucket(
            scope,
            'TranscribedTextFileBucket'
        );

        // deploy frontend
        // tslint:disable-next-line: no-unused-expression
        new s3Deployment.BucketDeployment(scope, 'DeployWebsite', {
            sources: [s3Deployment.Source.asset(WEBSITE_DIST_FOLDER)],
            destinationBucket: this.staticWebsiteBucket,
        });
    }
}