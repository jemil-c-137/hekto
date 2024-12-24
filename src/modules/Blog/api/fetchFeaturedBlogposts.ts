import Api from "@/api"

export const fetchFeaturedBlogposts = async () => {
    const res = await Api.getAllProducts()
    return res.blogposts
}