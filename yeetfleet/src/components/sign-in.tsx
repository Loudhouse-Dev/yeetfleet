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
      {/* <form onSubmit={handleSubmit}>
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
          <Button type="submit" intent="primary">
            Sign In
          </Button>
        </div>
      </form> */}
      <button onClick={logGoogleUser}>Log Google User</button>
    </FormContainer>
  );
};

export default SignInForm;
