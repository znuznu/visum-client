import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

import Button from '../common/Button';
import Input from '../common/Input';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

interface FormValues {
  username: string;
  password: string;
}

interface FormErrors {
  username?: string;
  password?: string;
}

const validate = (values: FormValues) => {
  const errors: FormErrors = {};

  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

const SignInForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      username: '',
      password: ''
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Input
        id={'username'}
        label={'Username'}
        type={'text'}
        error={
          formik.touched.username && formik.errors.username
            ? formik.errors.username
            : undefined
        }
        {...formik.getFieldProps('username')}
      />
      <Input
        id={'password'}
        label={'Password'}
        type={'password'}
        error={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : undefined
        }
        {...formik.getFieldProps('password')}
      />
      <Button type={'submit'}>{'Log In'}</Button>
    </StyledForm>
  );
};

export default SignInForm;
