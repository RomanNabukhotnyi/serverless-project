import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    return {
        message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    };
};

export const main = middyfy(hello, schema);
