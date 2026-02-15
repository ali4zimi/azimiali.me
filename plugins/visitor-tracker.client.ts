export default defineNuxtPlugin((nuxtApp) => {
  // Only track once per session
  if (typeof window !== 'undefined' && !sessionStorage.getItem('_session_init')) {
    const router = useRouter()
    const currentPath = router.currentRoute.value.path
    
    // Track visitor (fire and forget - doesn't block app loading)
    $fetch('/api/visitor', { 
      method: 'POST',
      body: {
        page: currentPath
      }
    })
      .then(() => {
        // Mark as tracked in this session
        sessionStorage.setItem('_session_init', 'true')
      })
      .catch((error) => {
        console.error('Analytics error:', error)
      })
  }
})
