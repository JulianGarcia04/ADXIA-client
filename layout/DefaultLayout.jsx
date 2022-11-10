import React from 'react'

export default function DefaultLayout({children, className}) {
  return (
    <main className={className}>
        {children}
    </main>
  )
}
