import '@/styles/globals.css'
import ErrorBoundary from '@/components/errorboundary'

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
    )
}

