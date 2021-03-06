import { useState } from 'react';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';

import { SignUpRequestBody, signUp } from 'services/api/sign';

import { VisumHttpError } from 'errors/errors';

import Button from 'components/primitives/Button';
import Input from 'components/primitives/Input';
import HttpError from 'components/primitives/HttpError';

import { validate } from './validate';
import StyledForm from './style';

export interface FormValues {
  username: string;
  password: string;
  confirmPassword: string;
  registrationKey: string;
}

const SignUpForm = () => {
  const [requestError, setRequestError] = useState<VisumHttpError | undefined>(undefined);
  const signUpMutation = useMutation((body: SignUpRequestBody) => signUp(body), {
    onError: (error: VisumHttpError) => {
      setRequestError(error);
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
      signUpMutation.mutate(values);
    }
  });

  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        {signUpMutation.isError && (
          <HttpError
            error={requestError!}
            margin={'0 0 1rem'}
            overridingMessage={'Wrong credentials.'}
          />
        )}
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
