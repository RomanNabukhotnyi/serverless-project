import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';

const func5 = async (event: { body: { array: { firstName: string, birthDate: string }[]; }; }) => {
    const array = event.body.array;
    const sortedByName = [...array.sort((a, b) => a.firstName.localeCompare(b.firstName))];
    const sortedByDate = [...array.sort((x, y) => (Number(new Date(y.birthDate)) - Number(new Date(x.birthDate))))];
    return formatJSONResponse({
        sortedByName,
        sortedByDate,
    });
};

export const main = middyfy(func5);