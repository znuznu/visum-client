import { FormValues } from '.';

export interface FormErrors {
  username?: string;
  password?: string;
}

export const validate = (values: FormValues) => {
  const errors: FormErrors = {};

  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};
