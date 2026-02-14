<template>
	<NuxtLayout>
		<h1 class=" mb-3">Posts</h1>
				<div v-if="error" class="text-red-500 dark:text-red-400">
					Failed to load posts. Please try again later.
				</div>
				<div v-else-if="!data?.posts" class="text-slate-600 dark:text-slate-400">
					Loading posts...
				</div>
				<div v-else class="flex flex-col gap-2">
					<nuxt-link :to="generatePostUrl(post)" class="article title" v-for="post in data.posts" :key="post.id">
						<div class="title">{{ post.properties.title.title[0].plain_text }}</div>
						<div class="flex gap-5">
							<div class="text-sm pt-3">
								<span class="text-slate-600 uppercase">Published: </span>
								<span class="text-slate-400">{{ formatDate(post.properties.publish_date.date.start) }}</span>
							</div>
							<div class="text-sm pt-3">
								<span class="text-slate-600 uppercase">Lang: </span>	
								<span class="text-slate-400">English</span>
							</div>
							<!-- <div class="text-sm pt-3">
								<span class="text-slate-600 uppercase">Category: </span>
								<span class="text-slate-400">
									<span class="px-1 text-xs rounded-sm text-slate-200 dark:text-slate-400d bg-slate-800 dark:bg-slate-500">Frontend</span>
								</span>
							</div> -->
						</div>
					</nuxt-link>
				</div>
	</NuxtLayout>
</template>

<style>
.article {
	@apply w-full py-5 px-4 bg-slate-50 border rounded-md  cursor-pointer
}

.dark .article {
	@apply bg-gray-900 border-gray-900 text-gray-100 hover:border-gray-100
}

.article:hover {
	@apply border-gray-950
}

.article .title {
	/* @apply text-xl truncate text-slate-600 dark:text-slate-400 */
}

.article .publish-date {
	@apply text-gray-500
}
</style>


<script setup>

const { data, error } = await useFetch("/api/posts");
const { createSlug, setMappings } = usePostSlugMapping();

// Store slug-to-ID mappings when posts are loaded
watch(() => data.value?.posts, (posts) => {
	if (posts && posts.length > 0) {
		const mappings = {};
		posts.forEach(post => {
			const title = post.properties.title.title[0]?.plain_text || 'untitled';
			const slug = createSlug(title);
			mappings[slug] = post.id;
		});
		setMappings(mappings);
	}
}, { immediate: true });

const formatDate = (date) => {
	if (date === undefined) return '';
	// format date as MM/DD/YYYY
	const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
	return new Date(date).toLocaleDateString('en-US', options);
}

// Generate post URL with only slug (no ID)
const generatePostUrl = (post) => {
	const title = post.properties.title.title[0]?.plain_text || 'untitled';
	const slug = createSlug(title);
	return `/post/${slug}`;
}
</script>
