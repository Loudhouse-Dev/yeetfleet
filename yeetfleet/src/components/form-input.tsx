import { InputHTMLAttributes, FC } from 'react';

type FormInputProps = {
  name: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ name, label, ...props }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <input {...props} />
    </div>
  );
};

export default FormInput;
