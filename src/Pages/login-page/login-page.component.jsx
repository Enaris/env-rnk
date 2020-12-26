import React from 'react';
import LoginForm from '../../Components/Forms/login-form/login-form.component';
import './login-page.styles.scss';

const LoginPage = () => {

  return (
    <div className='login-page page-flex flex-center'>
      <LoginForm />
    </div>
  )
}


export default LoginPage;