import Joi from 'joi';

export default Joi.object({
    array: Joi.array().min(1).required(),
    n: Joi.number().integer().required(),
});