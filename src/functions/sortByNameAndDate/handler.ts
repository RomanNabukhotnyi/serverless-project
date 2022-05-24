import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';

import schema from './schema';

const sortByNameAndDate: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    const { array } = event.body;
    const sortedByName = [...array.sort((a, b) => a.firstName.localeCompare(b.firstName))];
    const sortedByDate = [...array.sort((x, y) => (Number(new Date(y.birthDate)) - Number(new Date(x.birthDate))))];
    return {
        sortedByName,
        sortedByDate,
    };
};

export const main = middyfy(sortByNameAndDate, schema);