import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';

import schema from './schema';

const findTheSumAndProductOfTheFirstNElements: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    const array = event.body.array;
    const n = event.body.n;
    const sum = array.slice(0, n).reduce((res, elem) => res + elem, 0);
    const prod = array.slice(0, n).reduce((res, elem) => res * elem, 1);
    return {
        sum,
        prod,
    };
};

export const main = middyfy(findTheSumAndProductOfTheFirstNElements, schema);