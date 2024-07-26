export interface PaginationResponse<Data> {
  data: Data[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
}

export interface PaginationParams {
  page: number;
  size: number;
}

export type WebApiParams = Partial<PaginationParams>;
