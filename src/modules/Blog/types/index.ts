import { IApiResponse } from "@/api/types";
import { IBlogPost } from "@/shared/types";

export type BlogPostsResponse = IApiResponse<IBlogPost[]>