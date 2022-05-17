import Joi from 'joi';

import { formatJSONResponse } from './api-gateway';

export const handlerWrapper = (schema: Joi.ObjectSchema, handler:Function) => {
    return async (event: { body: any; }) => {
        try {
            const body = await schema.validateAsync(event.body);
            return handler(body);
        } catch (error) {
            return formatJSONResponse({
                message: 'Invalid request body',
                error,
            });
        }
    };
};