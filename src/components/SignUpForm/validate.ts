import { FormValues } from '.';

export interface FormErrors {
  username?: string;
  password?: string;
  confirmPassword?: string;
  registrationKey?: string;
}

export const validate = (values: FormValues) => {
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
