import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='not-found'>
      <h1>
        Meal Not found
      </h1>
      <p>
        <Link href="/meals">Go Back</Link>
      </p>
    </main>
  )
}
