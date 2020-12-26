import React from 'react';
import RegisterForm from '../../Components/Forms/register-form/register-form.component';
import './register-page.styles.scss';

const RegisterPage = () => {

  return (
    <div className='register-page page-flex flex-center'>
      <RegisterForm />
    </div>
  )
}


export default RegisterPage;