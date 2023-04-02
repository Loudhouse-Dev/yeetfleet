import SignInForm from '../components/sign-in';
import SignUpForm from '../components/sign-in';

const Authentication = () => {
  return (
    <div className="authentication-page flex flex-row ">
      <div className="authentication-left flex w-2/4 justify-center">
        <SignInForm />
      </div>
      <div className="authentication-right flex w-2/4 justify-center">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
