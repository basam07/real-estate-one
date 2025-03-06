import { FormDropdownProps, FormFieldProps } from "./form-partials.dto.js";
const starikReq = <span className="text-red-600"> * </span>;
export const FormField = ({ label, type, name, placeholder, defaultValue, required = false, onChange, accept = null, multiple = false }) => {
    return (
        <div className="flex flex-col w-full">
            <label className="block text-gray-500 font-bold mb-1">{label } { required ? starikReq : ' '  }</label>
            <input
                type={type}
                placeholder={placeholder || 'Enter ' + name}
                defaultValue={defaultValue}
                name={name}
                onChange={onChange || null}
                accept={accept || 'image/*'}
                multiple={multiple}
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
                 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
        </div>
    );
};

export const FormDropdown = ({label, name, options, defaultValue, onChange}) => {
    return <div className="flex flex-col w-full">
            <label className="block text-gray-500 font-bold mb-1">
                {label}
            </label>
                <select
                    name={name}
                    onChange={onChange || null}
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2
                    text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    defaultChecked={defaultValue}
                    >
                    <option value="">Select {label}</option>
                    {options.map((option, idx) => <option selected={defaultValue === option.value} key={idx}
                        value={option.value}>{option.name}</option>)}
                </select>
    </div>
};

// eslint-disable-next-line react/prop-types
export const FormTextBox = ({label, name, placeholder, defaultValue, onChange , classes = ''}) => {
    return (
        <div className={`flex flex-col w-full ${classes}`}>
            <label className="block text-gray-500 font-bold mb-1">{label}</label>
            <textarea
                placeholder={placeholder || 'Enter ' + name}
                defaultValue={defaultValue}
                name={name}
                rows={5}
                onChange={onChange || null}
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
                 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
        </div>
    );
}


//prop types of comps
FormField.propTypes = FormFieldProps;
FormDropdown.propTypes = FormDropdownProps;



