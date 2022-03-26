import { HTTPError } from 'ky';

export enum VisumHttpErrorCode {
  INVALID_BODY = 'INVALID_BODY',
  INVALID_ARGUMENT = 'INVALID_ARGUMENT',
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
  DATA_ALREADY_EXISTS = 'DATA_ALREADY_EXISTS',
  MAXIMUM_NUMBER_OF_REVIEWS_REACHED = 'MAXIMUM_NUMBER_OF_REVIEWS_REACHED',
  INVALID_REGISTRATION_KEY = 'INVALID_REGISTRATION_KEY',
  MAXIMUM_NUMBER_OF_ACCOUNT_REACHED = 'MAXIMUM_NUMBER_OF_ACCOUNT_REACHED'
}

export interface VisumHttpError {
  timestamp: number;
  status: string;
  error: string;
  path: string;
  message: string;
  code: VisumHttpErrorCode;
}

// JUMP
export const mapKyToVisumError = (error: HTTPError): undefined => {
  return;
};
