import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class UpdateCareerDescriptionValidator extends AbstractValidator {
    getValidator() {
        return {
            body: Joi.object({
                id: Joi.string().required(), // Required for identifying the record to update
                careerDescription: Joi.string().required(),
            }),
        };
    }
}