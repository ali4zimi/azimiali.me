<template>
	<NuxtLayout>
			<NuxtLayout name="content">
				<h1 class=" mb-3">Posts</h1>
				<ContentList path="/posts" v-slot="{ list }">
					<div class="flex flex-col gap-2">
						<nuxt-link :to="article._path" class="article title" v-for="article in articles" :key="article._path">
							<div class="title">{{ article.title }}</div>
							<div class="flex gap-5">
								<div class="text-sm pt-3">
									<span class="text-slate-600 uppercase">Published: </span>
									<span class="text-slate-400">{{ formatDate(article.publish_date) }}</span>
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
				</ContentList>
			</NuxtLayout>
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
	@apply text-xl truncate text-slate-600 dark:text-slate-400
}

.article .publish-date {
	@apply text-gray-500
}
</style>


<script setup>

const articles = await queryContent('/posts')
	.sort({ publish_date: -1 })
	.where({ draft: { $ne: true } })
	.find();

const formatDate = (date) => {
	if (date === undefined) return '';
	// format date as MM/DD/YYYY
	const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
	return new Date(date).toLocaleDateString('en-US', options);
}
</script>
