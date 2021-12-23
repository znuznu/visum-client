import React from 'react';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';

import { API_URL } from '../../config';
import Button from '../common/Button';
import Input from '../common/Input';
import HttpService from '../../services/http';
import { SignUpRequestBody } from './models';
import StyledForm from './style';

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
    (body: SignUpRequestBody) =>
      HttpService.post(`${API_URL}/api/accounts/sign-up`, { json: body }),
    {
      onError: () => {
        console.log('Oops.');
      },
      onSuccess: () => {
        console.log('Success.');
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
      {/* TODO #1 */}
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
          margin={'0 0 2rem 0'}
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
          margin={'0 0 2rem 0'}
          {...formik.getFieldProps('password')}
        />
        <Input
          id={'confirmPassword'}
          label={'Password confirmation'}
          type={'password'}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : undefined
          }
          margin={'0 0 2rem 0'}
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
          margin={'0 0 2rem 0'}
          {...formik.getFieldProps('registrationKey')}
        />
        <Button type="submit">{'Sign up'}</Button>
      </StyledForm>
    </>
  );
};

export default SignUpForm;
