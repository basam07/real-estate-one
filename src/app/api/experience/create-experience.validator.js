import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class CreateExperienceValidator extends AbstractValidator {
    getValidator() {
        return {
            body: {
                experTitle: Joi.string().required(),
                experDescription: Joi.string().required(),
            },
        };
    }
}
