// Base API response wrapper
export interface IPaginatedResponse<T> {
  message: string;
  code: number;
  success: boolean;
  data: IPaginatedData<T>;
  errors: any;
}

// For paginated responses
interface IPaginatedData<T> {
  data: T[]; // actual list of items
  page: number; // current page index
  pageSize: number; // items per page
  totalItems: number; // total count in DB
  totalPages: number; // total pages available
  counter: number; // items count in current page
}
