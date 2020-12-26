import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { registerStart, setRegisterErrors } from '../../../Redux/auth/auth.actions';
import { selectRegisterErrors } from '../../../Redux/auth/auth.selectors';
import FormErrors from '../form-errors/form-errors.component';
import './register-form.styles.scss';
import MuiFTxtField from '../Formik/mui-f-txt-field/mui-f-txt-field.component';
import validationSchema from './register-form.validation';

const RegisterForm = ({ register, setRegisterErrors, registerErrors }) => {

  useEffect(() => {
    return () => {
      setRegisterErrors(null);
    };
  }, [setRegisterErrors]);

  return (
    <div className='register-form'>
      <h1 className='mb5'>Register</h1>
      <Formik 
        initialValues={{
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={ validationSchema }
        onSubmit={ v => { 
          register({email: v.email, password: v.password});
        }}
      >
        <Form className='register-form min-vw50'>
          <FormErrors 
            errors={ registerErrors }
            containerClass='mb5'
          />
          
          <MuiFTxtField 
            name='email'
            containerClass='mb5'
            label='Email'
            fullWidth
            variant='filled'
          />

          <MuiFTxtField 
            name='password'
            containerClass='mb5'
            label='Password'
            fullWidth
            type='password'
            variant='filled'
          />

          <MuiFTxtField 
            name='confirmPassword'
            containerClass='mb5'
            label='Confirm Password'
            fullWidth
            type='password'
            variant='filled'
          />

          <Button type='submit' > Register </Button>
        </Form>
      </Formik>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  register: registerData => dispatch(registerStart(registerData)),
  setRegisterErrors: errors => dispatch(setRegisterErrors(errors))
})

const mapStateToProps = createStructuredSelector({
  registerErrors: selectRegisterErrors
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);