// ApiResponse
export interface IApiResponse<T> {
  data?: {
    message: string;
    code: number;
    success: boolean;
    data: T;
  };
  error?: null | {
    data: {
      message: string;
      code: number;
      success: boolean;
      errors:
        | null
        | {
            path: string;
            message: string;
          }[];
    };
  };
}
