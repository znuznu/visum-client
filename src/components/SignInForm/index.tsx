import React from 'react';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import HttpService from '../../services/http';

import { API_URL, JWT_TOKEN_KEY } from '../../config';
import Button from '../common/Button';
import Input from '../common/Input';
import { SignInRequestBody, SignInResponseBody } from './models';
import StyledForm from './style';
import { SimpleLocalStorageService } from '../../services/simpleLocalStorage';

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
  const signInMutation = useMutation(
    (body: SignInRequestBody) =>
      HttpService.post(`${API_URL}/api/accounts/sign-in`, {
        json: body
      }).json<SignInResponseBody>(),
    {
      onError: () => {
        // TODO #1
        console.log('Oops.');
      },
      onSuccess: (data) => {
        SimpleLocalStorageService.setItem(JWT_TOKEN_KEY, data.token);
        // TODO redirect to home
      }
    }
  );

  const formik = useFormik<FormValues>({
    initialValues: {
      username: '',
      password: ''
    },
    validate,
    onSubmit: (values) => {
      signInMutation.mutate(values);
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
      <Button type={'submit'}>{'Sign in'}</Button>
    </StyledForm>
  );
};

export default SignInForm;
