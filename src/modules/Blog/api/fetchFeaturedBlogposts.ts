import { handleResponse } from "@/api"
import { API_BASE_URL } from "@/shared/constants";
import { BlogPostsResponse } from "../types";

export const getBlogPosts = async (): Promise<BlogPostsResponse> => {
    const response = await fetch(`${API_BASE_URL}/blog_posts`);
    return handleResponse(response);
}
