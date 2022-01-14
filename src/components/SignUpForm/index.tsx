import React from 'react';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';

import Button from '../common/Button';
import Input from '../common/Input';
import StyledForm from './style';
import { validate } from './validate';
import { signUp, SignUpRequestBody } from '../../services/api/sign';

export interface FormValues {
  username: string;
  password: string;
  confirmPassword: string;
  registrationKey: string;
}

const SignUpForm = () => {
  const mutation = useMutation((body: SignUpRequestBody) => signUp(body), {
    onError: () => {
      console.log('Oops.');
    },
    onSuccess: () => {
      console.log('Success.');
    }
  });

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
