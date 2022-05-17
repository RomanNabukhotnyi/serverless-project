import Joi from 'joi';

export default Joi.object({
    array: Joi.array().items({
        firstName: Joi.string().required(),
        lastName: Joi.string(),
        birthDate: Joi.string().required(),
    }).min(1).required(),
});