import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class CreateTeamValidator extends AbstractValidator {
    getValidator() {
        return {
            body: {
                name: Joi.string().required(),
                designation: Joi.string().required(),
            },
        };
    }
}
