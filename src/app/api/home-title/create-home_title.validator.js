import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class CreateTaglineValidator extends AbstractValidator {
    getValidator() {
        return {
            body: {
                tagline: Joi.string().required(),
                subTagline: Joi.string().required(),
            },
        };
    }
}
