import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    MONGODB_URL: Joi.required(),
    DB_NAME: Joi.required(),
    PORT: Joi.number().default(3002),
});
