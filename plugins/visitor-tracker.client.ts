export default defineNuxtPlugin(() => {
  // Only track once per session
  if (typeof window !== 'undefined' && !sessionStorage.getItem('_session_init')) {
    // Track visitor (fire and forget - doesn't block app loading)
    $fetch('/api/visitor', { method: 'POST' })
      .then(() => {
        // Mark as tracked in this session
        sessionStorage.setItem('_session_init', 'true')
      })
      .catch((error) => {
        console.error('Analytics error:', error)
      })
  }
})
