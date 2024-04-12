import DynamicPopupProvider from '@/components/PopUp/DynamicPopUpProvider'
import dynamic from 'next/dynamic'
import React from 'react'

const SomeFeatureComponent = dynamic(
  () => import('@/components/SomeFeatureComponent'),
  {
    ssr: false,
  },
)

export default function Test() {
  return (
    <DynamicPopupProvider>
      <div className="mx-auto max-w-3xl">
        <h1>Welcome to the Example Page</h1>
        <p>
          This page is rendered server-side, but the popup feature loads
          client-side.
        </p>
        <SomeFeatureComponent />
      </div>
    </DynamicPopupProvider>
  )
}
