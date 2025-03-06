import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class CreateCareerRealinvteValidator extends AbstractValidator {
    getValidator() {
        return {
            body: Joi.object({
                realinvteTitle: Joi.string().required(),
                realinvteDescription: Joi.string().required(),
            }),
        };
    }
}