import React from 'react'

export default function Index({message}) {
  return (
    <div>{message}</div>
  )
}

export async function getServerSideProps(context) {
    return {
      props: {
          message: "Hola Mundo"
      }, // will be passed to the page component as props
    }
  }
