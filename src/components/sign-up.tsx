import { useState, FormEvent, ChangeEvent } from 'react';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import FormInput from './form-input';
import Button from './button';
import FormContainer from './form-container';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState('');
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      //TODO: Dispatch action to sign up with email and password
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        setErrorMessage('Email already in use');
      } else {
        setErrorMessage('Failed to Sign up User');
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          value={displayName}
        />
        <FormInput
          name="email"
          label="Email Address"
          type="email"
          required
          onChange={handleChange}
          value={email}
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          required
          onChange={handleChange}
          value={password}
        />
        <FormInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </FormContainer>
  );
};

export default SignUpForm;
