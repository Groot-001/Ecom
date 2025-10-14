// Response
export interface IApiResponse {
  data?: {
    message: string;
    code: number;
    errors: string;
  };
  error?: {
    data: {
      message: string;
      code: number;
      errors: null;
    };
  };
}
