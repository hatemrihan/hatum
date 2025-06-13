'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-black text-black dark:text-white flex items-center justify-center transition-colors duration-300">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-lg mb-6">A global error occurred.</p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center px-6 py-3 bg-black dark:bg-stone-100 text-stone-100 dark:text-black font-semibold rounded-full hover:bg-black/80 dark:hover:bg-stone-100/80 transition-all duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 