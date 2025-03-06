import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class CreateServicesValidator extends AbstractValidator {
    getValidator() {
        return {
            body: {
                description: Joi.string().required(),
            },
        };
    }
}
