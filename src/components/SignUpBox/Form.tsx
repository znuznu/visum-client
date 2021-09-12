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
  passwordConfirmation: string;
  registrationKey: string;
}

interface FormErrors {
  username?: string;
  password?: string;
  passwordConfirmation?: string;
  registrationKey?: string;
}

const validate = (values: FormValues) => {
  const errors: FormErrors = {};

  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Required';
  }

  if (values.password !== values.passwordConfirmation) {
    errors.password = 'Password is different from the password confirmation';
    errors.passwordConfirmation = 'Password is different from the password confirmation';
  }

  if (!values.registrationKey) {
    errors.registrationKey = 'Required';
  }

  return errors;
};

const SignUpForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      username: '',
      password: '',
      passwordConfirmation: '',
      registrationKey: ''
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
      <Input
        id={'passwordConfirmation'}
        label={'Password confirmation'}
        type={'passwordConfirmation'}
        error={
          formik.touched.passwordConfirmation && formik.errors.passwordConfirmation
            ? formik.errors.passwordConfirmation
            : undefined
        }
        {...formik.getFieldProps('passwordConfirmation')}
      />
      <Input
        id={'registrationKey'}
        label={'Registration key'}
        type={'registrationKey'}
        error={
          formik.touched.registrationKey && formik.errors.registrationKey
            ? formik.errors.registrationKey
            : undefined
        }
        {...formik.getFieldProps('registrationKey')}
      />
      <Button type="submit">{'Sign up'}</Button>
    </StyledForm>
  );
};

export default SignUpForm;
