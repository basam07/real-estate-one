import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';


export class UpdateCareerRealinvteValidator extends AbstractValidator {
    getValidator() {
        return {
            body: Joi.object({
                id: Joi.string().required(), // Required for identifying the record to update
                realinvteTitle: Joi.string().required(),
                realinvteDescription: Joi.string().required(),
            }),
        };
    }
}
