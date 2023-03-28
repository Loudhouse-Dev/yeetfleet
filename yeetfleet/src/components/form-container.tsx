import { ReactNode } from 'react';

type ContainerProps = { children: ReactNode };

const SignInContainer = ({ children }: ContainerProps) => {
  return (
    <div className="form-wrapper mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        {children}
      </div>
    </div>
  );
};

export default SignInContainer;
