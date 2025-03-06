import Joi from 'joi';
import { AbstractValidator } from '../../../../../lib/abstract.utils';

export class UpdateExperienceValidator extends AbstractValidator {
    getValidator() {
        return {
            body: {
                id: Joi.string().required(), // ID is required for updating experience
                experTitle: Joi.string().required(),
                experDescription: Joi.string().required(),
            },
        };
    }
}
