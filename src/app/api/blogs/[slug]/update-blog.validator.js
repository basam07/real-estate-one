import Joi from 'joi';
import { AbstractValidator } from '../../../../../lib/abstract.utils';

export class UpdateBlogValidator extends AbstractValidator {
    getValidator() {
        return {
            body:{
                slug: Joi.string().required(),
                Title: Joi.string().required(),
                content: Joi.string().required(),
                heroImage: Joi.string().required(),
            },
        };
    }
}