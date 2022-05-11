import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';

const func1 = async (event: { body: { array: number[]; }; }) => {
    const array = event.body.array;
    const index = array.findIndex(element => element > 0);
    const value = array[index];
    return formatJSONResponse({
        index,
        value,
    });
};

export const main = middyfy(func1);