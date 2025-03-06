import Joi from 'joi';
import { AbstractValidator } from '../../../../../lib/abstract.utils.js';

export class UpdateTaglineValidator extends AbstractValidator {
    getValidator() {
        return {
            body: {
                slug: Joi.string().required(), // Required for identifying the record to update
                tagline: Joi.string().required(),
                subTagline: Joi.string().required(),
            },
        };
    }
}
