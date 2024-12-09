<template>
    <section class="content-container py-32">
        <div>
            <h5 class="section-title mb-20">Leatest Blog</h5>

            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            <BlogpostCard
                v-for="post in blogposts"
                :key="post.slug"
                :imageUrl="post.imageUrl"
                :title="post.title"
                :subtext="post.subtext"
            />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BlogpostCard from '@/components/BlogpostCard.vue'
import { IBlogPost } from '@/shared/types'
import { fetchFeaturedBlogposts } from '../api/fetchFeaturedBlogposts'

const blogposts = ref<IBlogPost[] | null>(null)

onMounted(async () => {
    const featuredBlogposts = await fetchFeaturedBlogposts()
    blogposts.value = featuredBlogposts
})
</script>
