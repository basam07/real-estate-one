import Joi from 'joi';
import { AbstractValidator } from '../../../../lib/abstract.utils';

export class CreateOurTeamValidator extends AbstractValidator {
    getValidator() {
        return {
            body: {
                description: Joi.string().required(),
            },
        };
    }
}
