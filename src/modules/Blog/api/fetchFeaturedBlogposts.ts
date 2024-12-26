import { handleResponse } from "@/api"
import { API_BASE_URL } from "@/shared/constants";

export const getBlogPosts = async () => {
    const response = await fetch(`${API_BASE_URL}/blog_posts`);
    return handleResponse(response);
}
