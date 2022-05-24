import { DateTime } from 'luxon';

import { middyfy } from '../../libs/lambda';

const findTodaysDateIndex = async () => {
    const index = DateTime.now().ordinal;
    return {
        index,
    };
};

export const main = middyfy(findTodaysDateIndex, { type: 'any' });