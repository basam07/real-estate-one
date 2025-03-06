import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class CreateCareerDescriptionValidator extends AbstractValidator {
    getValidator() {
        return {
            body: Joi.object({
                careerDescription: Joi.string().required(),
            }),
        };
    }
}