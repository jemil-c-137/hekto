<template>
    <section class="content-container py-32">
        <div>
            <h5 class="section-title mb-20">Leatest Blog</h5>
            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
                <template v-if="loading">
                    <SkeletonCard  v-for="i in 3" :key="i" widthClass="w-full max-w-[360px]" heightClass="h-[260px]" />
                </template>
                <template v-else>
                    <BlogpostCard
                        v-for="post in blogposts"
                        :key="post.slug"
                        :imageUrl="post.imageUrl"
                        :title="post.title"
                        :subtext="post.subtext"
                    />
                </template>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BlogpostCard from '@/components/BlogpostCard.vue'
import { IBlogPost } from '@/shared/types'
import { getBlogPosts } from '../api/fetchFeaturedBlogposts'
import SkeletonCard from '@/UI/SkeletonCard.vue';

const blogposts = ref<IBlogPost[] | null>(null)
const loading = ref<boolean>(false);

onMounted(async () => {
    const featuredBlogposts = await getBlogPosts()
    blogposts.value = featuredBlogposts
})
</script>
