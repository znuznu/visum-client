import { FormValues } from '.';

interface FormErrors {
  grade?: string;
  content?: string;
}

export const validate = (values: FormValues) => {
  const errors: FormErrors = {};

  if (!Number.isInteger(values.grade)) {
    errors.grade = 'Grade should be number';
  }

  if (values.grade <= 0 || values.grade > 10) {
    errors.grade = 'Grade is out of range';
  }

  if (!values.content.trim()) {
    errors.content = 'Required';
  }

  return errors;
};
