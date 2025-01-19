'use client'

import AppCrash from '@/components/error/AppCrash'

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return <AppCrash error={error} reset={reset} />
}
