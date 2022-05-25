import { AccessibleIcon } from '../AccessibleIcon';
import { VisumHttpError } from '../../../errors/errors';
import {
  HttpErrorStyleProps,
  StyledError,
  StyledErrorContent,
  StyledErrorTitle,
  TriangleIcon
} from './style';

export type HttpErrorProps = HttpErrorStyleProps & {
  error: VisumHttpError;
  overridingMessage?: string;
};

const HttpError = ({ error, margin, overridingMessage }: HttpErrorProps) => {
  return (
    <StyledError margin={margin}>
      <StyledErrorTitle>
        <AccessibleIcon label="warning">
          <TriangleIcon />
        </AccessibleIcon>
        Error
      </StyledErrorTitle>
      <StyledErrorContent>
        {Number(error.status) >= 500
          ? 'Fatal server error.'
          : overridingMessage ?? error.message}
      </StyledErrorContent>
    </StyledError>
  );
};

export default HttpError;
