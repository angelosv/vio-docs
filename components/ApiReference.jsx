'use client'

import dynamic from 'next/dynamic'
import '@scalar/api-reference-react/style.css'

const ApiReferenceReact = dynamic(
  () => import('@scalar/api-reference-react').then((mod) => mod.ApiReferenceReact),
  { ssr: false }
)

export function ApiReference() {
  return (
    <div
      className="api-reference-wrapper"
      style={{
        minHeight: 'calc(100vh - 120px)',
        width: '100%',
        margin: 0,
        padding: 0,
      }}
    >
      <ApiReferenceReact
        configuration={{
          url: '/openapi.yaml',
          theme: 'purple',
          layout: 'modern',
          darkMode: true,
          hideSidebar: false,
          hideModels: false,
          hideDownloadButton: false,
        }}
      />
    </div>
  )
}
