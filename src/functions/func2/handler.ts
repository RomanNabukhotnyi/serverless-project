import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';

const func2 = async (event: { body: { array: number[]; }; }) => {
    const array = event.body.array;
    const sum = array.reduce((res, elem) => elem > 0 ? res + elem : res, 0);
    return formatJSONResponse({
        sum,
    });
};

export const main = middyfy(func2);