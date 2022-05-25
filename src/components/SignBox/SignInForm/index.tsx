import { useState } from 'react';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';

import Button from '../../common/Button';
import Input from '../../common/Input';
import { StyledForm } from './style';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../providers/AuthProvider';
import { validate } from './validate';
import { signIn, SignInRequestBody } from '../../../services/api/sign';
import HttpError from '../../common/HttpError';
import { VisumHttpError } from '../../../errors/errors';

export interface FormValues {
  username: string;
  password: string;
}

const SignInForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [requestError, setRequestError] = useState<VisumHttpError | undefined>(undefined);

  const signInMutation = useMutation((body: SignInRequestBody) => signIn(body), {
    onSuccess: (data, variables) => {
      auth.signIn(variables.username, data.token);
      navigate('/');
    },
    onError: (error: VisumHttpError) => {
      setRequestError(error);
    }
  });

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
      {signInMutation.isError && (
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
      <Button type={'submit'}>{'Sign in'}</Button>
    </StyledForm>
  );
};

export default SignInForm;
