import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';

import { API_URL } from '../../config';
import Button from '../common/Button';
import Input from '../common/Input';
import HttpService from '../../services/http';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

interface FormValues {
  username: string;
  password: string;
  confirmPassword: string;
  registrationKey: string;
}

interface FormErrors {
  username?: string;
  password?: string;
  confirmPassword?: string;
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

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  }

  if (values.password !== values.confirmPassword) {
    errors.password = 'Password is different from the password confirmation';
    errors.confirmPassword = 'Password is different from the password confirmation';
  }

  if (!values.registrationKey) {
    errors.registrationKey = 'Required';
  }

  return errors;
};

const SignUpForm = () => {
  const mutation = useMutation(
    (account: FormValues) =>
      HttpService.post(`${API_URL}/api/accounts/sign-up`, { json: account }),
    {
      onError: () => {
        console.log('aie');
      },
      onSuccess: () => {
        console.log('yes!');
      }
    }
  );

  const formik = useFormik<FormValues>({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      registrationKey: ''
    },
    validate,
    onSubmit: (values) => {
      mutation.mutate(values);
    }
  });

  return (
    <>
      {/* TODO Handle properly */}
      {mutation.isError ? <div>An error occurred</div> : null}

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
          id={'confirmPassword'}
          label={'Password confirmation'}
          type={'confirmPassword'}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : undefined
          }
          {...formik.getFieldProps('confirmPassword')}
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
    </>
  );
};

export default SignUpForm;
