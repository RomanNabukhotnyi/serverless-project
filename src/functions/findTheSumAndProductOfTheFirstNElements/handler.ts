import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import { handlerWrapper } from '../../libs/handler-wrapper';

import schema from './schema';

const findTheSumAndProductOfTheFirstNElements = async (body: { array: number[]; n: number; }) => {
    const array = body.array;
    const n = body.n;
    const sum = array.slice(0, n).reduce((res, elem) => res + elem, 0);
    const prod = array.slice(0, n).reduce((res, elem) => res * elem, 1);
    return formatJSONResponse({
        sum,
        prod,
    });
};

export const main = middyfy(handlerWrapper(schema, findTheSumAndProductOfTheFirstNElements));