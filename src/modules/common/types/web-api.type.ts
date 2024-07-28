export interface PaginationResponse<Data> {
  data: Data[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
}

export interface SearchParams {
  filter: string
}

export interface PaginationParams {
  page: number;
  size: number;
}

export type WebApiParams = Partial<PaginationParams> & Partial<SearchParams>
