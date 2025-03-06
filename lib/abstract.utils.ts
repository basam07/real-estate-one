import Joi from 'joi';

export abstract class AbstractValidator {
    protected abstract getValidator(): any;
    private readonly defaultOptions = { allowUnknown: true };

    public validate(data: any, customOptions?: any): any {
        const schema = Joi.object().keys(this.getValidator());

        const validation = schema.validate(data, this.defaultOptions);

        if (validation.error) {
            const invalidKey = validation.error.details[0].context?.key;
            throw `InvalidKey_${invalidKey} ${validation.error.details[0].message}`;
        }

        return validation.value;
    }
}
