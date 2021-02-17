import React from 'react';
import SignIn from '../../sign-in/sign-in';
import SignUp from '../../sign-up/sign-up';

import './sign-in-and-sign-up.scss';

const SingInAndSingUp = () => {
  return (
    <div className='sing-in-and-sing-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SingInAndSingUp;
