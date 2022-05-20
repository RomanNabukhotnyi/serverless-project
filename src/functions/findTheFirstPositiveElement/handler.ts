import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';

import schema from './schema';

const findFirstPositiveElement: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    const array = event.body.array;
    const index = array.findIndex((element) => element > 0);
    const value = array[index];
    return {
        index,
        value,
    };
};

export const main = middyfy(findFirstPositiveElement, schema);