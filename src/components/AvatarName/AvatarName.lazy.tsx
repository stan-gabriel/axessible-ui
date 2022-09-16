import React, { lazy, Suspense } from 'react'

const LazyAvatarName = lazy(() => import('./AvatarName'))

const AvatarName = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyAvatarName userName={''} {...props} />
  </Suspense>
)

export default AvatarName
