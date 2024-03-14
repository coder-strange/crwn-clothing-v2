import { useEffect } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import SignUpForm  from '../../components/sign-up-form/sign-up.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './auth.styles.scss'

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log({ userDocRef })
  };

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
