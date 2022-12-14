import React from 'react'

export default function DefaultLayout({children, className}) {
  return (
    <main className={className} 
      style={{
        width: "100%", 
        display: "flex", 
        flexDirection: "column", 
        minHeight: "100vh",
        position: "relative"
      }}>
        {children}
    </main>
  )
}
