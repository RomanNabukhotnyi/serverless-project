import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';

const func4 = async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const beginYear = new Date(year, 0);
    const index = (Number(new Date(year, month, day)) - Number(beginYear)) / 1000 / 60 / 60 / 24;
    return formatJSONResponse({
        index,
    });
};

export const main = middyfy(func4);