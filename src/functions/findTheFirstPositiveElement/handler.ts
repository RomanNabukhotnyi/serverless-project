import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import { handlerWrapper } from '../../libs/handler-wrapper';

import schema from './schema';

const findFirstPositiveElement = async (body: { array: number[]; }) => {
    const index = body.array.findIndex((element) => element > 0);
    const value = body.array[index];
    return formatJSONResponse({
        index,
        value,
    });
};

export const main = middyfy(handlerWrapper(schema, findFirstPositiveElement));