import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class PropertiesValidator extends AbstractValidator {
    getValidator() {
        return {
            body:{
                slug: Joi.string().required(),
                Title: Joi.string().required(),
                description: Joi.string().required(),
                location: Joi.string().required(),
                price: Joi.number().required(),
                bedrooms: Joi.number().required(),
                bathrooms: Joi.number().required(),
                images: Joi.array().items(Joi.string()).required(),
            },
        };
    }
}