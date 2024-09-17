import { SignIn } from '@clerk/clerk-react'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <p>You must be signed in to view this page.</p>
        <SignIn />
      </SignedOut>
    </ClerkProvider>
  )
}
