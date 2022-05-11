import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';

const func3 = async (event: { body: { array: number[]; n: number; }; }) => {
    const array = event.body.array;
    const n = event.body.n;
    const sum = array.slice(0, n).reduce((res, elem) => res + elem, 0);
    const prod = array.slice(0, n).reduce((res, elem) => res * elem, 1);
    return formatJSONResponse({
        sum,
        prod,
    });
};

export const main = middyfy(func3);