import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loginStart, setLoginErrors } from '../../../Redux/auth/auth.actions';
import { selectLoginErrors } from '../../../Redux/auth/auth.selectors';
import FormErrors from '../form-errors/form-errors.component';
import MuiFTxtField from '../Formik/mui-f-txt-field/mui-f-txt-field.component';
import './login-form.styles.scss';
import validationSchema from './login-form.validation';

const LoginForm = ({ login, loginErrors, containerClass, setLoginErrors }) => {

  useEffect(() => {
    return () => {
      setLoginErrors(null);
    };
  }, [setLoginErrors]);

  return (
    <div className={ `${containerClass ? containerClass : ''}` }>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={ validationSchema }
        onSubmit={ v => login(v) }
      >
        <Form className='login-form min-vw50'>
          <FormErrors
            errors={ loginErrors }
            containerClass='mb5'
          />
          <MuiFTxtField
            name='email'
            fullWidth
            containerClass='mb5'
            label='Email'
            variant='filled'
          />
          <MuiFTxtField
            name='password'
            fullWidth
            containerClass='mb5'
            label='Password'
            type='password'
            variant='filled'
          />
          <Button type='submit' > Login </Button>
        </Form>
      </Formik>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  loginErrors: selectLoginErrors,
})

const mapDispatchToProps = dispatch => ({
  login: loginData => dispatch(loginStart(loginData)),
  setLoginErrors: errors => dispatch(setLoginErrors(errors))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);