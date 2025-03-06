import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class UpdateOurServicesValidator extends AbstractValidator {
    getValidator() {
        return {
            body: {
                id: Joi.string().required(), // Required for identifying the record to update
                description: Joi.string().required(),
            },
        };
    }
}
