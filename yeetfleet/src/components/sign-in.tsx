import { useState, FormEvent, ChangeEvent } from 'react';
import FormContainer from './form-container';
import Button from './button';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../lib/firebase/firebase.config';
import FormInput from './form-input';

const defaultFormFields = {
  email: '',
  password: '',
};

//Component that renders a button that allows the user to sign in with Google
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const signInWithGoogle = async () => {
    //TODO: Dispatch action to sign in with Google
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      //TODO: Dispatch action to sign in with email and password
      resetFormFields();
    } catch (error) {
      console.error('Failed to Sign in User', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <FormContainer>
      <form className="space-y-6" onSubmit={handleSubmit}>
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
        <div className="button-wrapper">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-sky-400 px-3 py-2 text-sm font-semibold text-white shadow-sm duration-200 hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={logGoogleUser}
        className="mt-6 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 duration-200 hover:bg-gray-50 focus:outline-offset-0"
      >
        <span className="sr-only">Sign in with Google</span>
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          />
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          />
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          />
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          />
        </svg>
      </button>
    </FormContainer>
  );
};

export default SignInForm;
