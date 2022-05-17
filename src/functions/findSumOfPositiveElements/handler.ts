import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import { handlerWrapper } from '../../libs/handler-wrapper';

import schema from './schema';

const findSumOfPositiveElements = async (body: { array: number[]; }) => {
    const array = body.array;
    const sum = array.reduce((res, elem) => elem > 0 ? res + elem : res, 0);
    return formatJSONResponse({
        sum,
    });
};

export const main = middyfy(handlerWrapper(schema, findSumOfPositiveElements));