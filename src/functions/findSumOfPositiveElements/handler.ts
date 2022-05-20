import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';

import schema from './schema';

const findSumOfPositiveElements: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    const array = event.body.array;
    const sum = array.reduce((res, elem) => elem > 0 ? res + elem : res, 0);
    return {
        sum,
    };
};

export const main = middyfy(findSumOfPositiveElements, schema);