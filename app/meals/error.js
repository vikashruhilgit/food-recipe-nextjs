"use client";

import React from "react";

export default function Error({ error }) {
  console.log(error);
  
  return (
    <main className="error">
      <h1>An error occurred!!!</h1>
      <p>{error.message}</p>
    </main>
  );
}
