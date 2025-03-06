import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class CreateAboutUsValidator extends AbstractValidator {
    getValidator() {
        return {
            body: Joi.object({
                title: Joi.string().required(),
                description: Joi.string().required(),
            }),
        };
    }
}
