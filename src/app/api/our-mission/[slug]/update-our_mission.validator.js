import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class UpdateOurMissionValidator extends AbstractValidator {
    getValidator() {
        return {
            body: {
                id: Joi.string().required(), // Required for identifying the record to update
                title: Joi.string().required(),
                description: Joi.string().required(),
            },
        };
    }
}
