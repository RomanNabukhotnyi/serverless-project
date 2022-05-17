import type { AWS } from '@serverless/typescript';

import hello from './src/functions/hello';
import findTheFirstPositiveElement from './src/functions/findTheFirstPositiveElement';
import findSumOfPositiveElements from './src/functions/findSumOfPositiveElements';
import findTheSumAndProductOfTheFirstNElements from './src/functions/findTheSumAndProductOfTheFirstNElements';
import findTodaysDateIndex from './src/functions/findTodaysDateIndex';
import sortByNameAndDate from './src/functions/sortByNameAndDate';

const serverlessConfiguration: AWS = {
    service: 'serverless-project',
    frameworkVersion: '3',
    plugins: [
        'serverless-esbuild',
        'serverless-webpack',
    ],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
            NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
        },
    },
    // import the function via paths
    functions: { 
        hello, 
        findTheFirstPositiveElement, 
        findSumOfPositiveElements, 
        findTheSumAndProductOfTheFirstNElements, 
        findTodaysDateIndex, 
        sortByNameAndDate, 
    },
    package: { individually: true },
    custom: {
        esbuild: {
            bundle: true,
            minify: false,
            sourcemap: true,
            exclude: ['aws-sdk'],
            target: 'node14',
            define: { 'require.resolve': undefined },
            platform: 'node',
            concurrency: 10,
        },
        webpack: {
            webpackConfig: 'webpack.config.ts',
            includeModules: true,
            packager: 'npm',
        },
    },
};

module.exports = serverlessConfiguration;
