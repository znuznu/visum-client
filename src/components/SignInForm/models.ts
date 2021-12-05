export interface SignInRequestBody {
  username: string;
  password: string;
}

export interface SignInResponseBody {
  token: string;
}
