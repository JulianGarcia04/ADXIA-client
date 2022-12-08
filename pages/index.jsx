import React from "react";
import { NextResponse } from "next/server";

export default function Index({ message }) {
  return <div>{message}</div>;
}

export async function getServerSideProps(context) {

  return {
    props: {
      message: "Hola Mundo",
    },
    redirect: {
      destination: '/login'
    },
  };
}
