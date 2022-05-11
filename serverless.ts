import type { AWS } from '@serverless/typescript';
import hello from './src/functions/hello';
import func1 from './src/functions/func1';
import func2 from './src/functions/func2';
import func3 from './src/functions/func3';
import func4 from './src/functions/func4';
import func5 from './src/functions/func5';

const serverlessConfiguration: AWS = {
    service: 'serverless-project',
    frameworkVersion: '3',
    plugins: [
        'serverless-esbuild',
        'serverless-webpack'
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
    functions: { hello, func1, func2, func3, func4, func5 },
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
            webpackConfig: 'webpack.config.js',
            includeModules: true,
            packager: 'npm'
        }
    },
};

module.exports = serverlessConfiguration;
