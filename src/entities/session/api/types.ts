export interface RequestLoginBody {
  username: string;
  password: string;
}

export interface SessionDto {
  access_token: string;
  token_type: string;
}
