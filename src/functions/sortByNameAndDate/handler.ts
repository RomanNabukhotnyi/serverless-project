import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import { handlerWrapper } from '../../libs/handler-wrapper';

import schema from './schema';

const sortByNameAndDate = async (body: { array: { firstName: string, birthDate: string }[]; }) => {
    const array = body.array;
    const sortedByName = [...array.sort((a, b) => a.firstName.localeCompare(b.firstName))];
    const sortedByDate = [...array.sort((x, y) => (Number(new Date(y.birthDate)) - Number(new Date(x.birthDate))))];
    return formatJSONResponse({
        sortedByName,
        sortedByDate,
    });
};

export const main = middyfy(handlerWrapper(schema, sortByNameAndDate));