export interface IApiResponse<T> {
    data: T;
    error?: string;
    metadata?: {
        total: number;
        page: number;
    };
}
