import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class CreateHomeAboutValidator extends AbstractValidator {
    getValidator() {
        return {
            body: {
                title: Joi.string().required(),
                description: Joi.string().required(),
            },
        };
    }
}
