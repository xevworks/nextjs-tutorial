"use client"

import React from 'react'

const Error = ({ error, reset }) => {
  return (
    <div>
        <p>{error.message}</p>
        <button onClick={reset} className='btn btn-error'>Reset API</button>
    </div>
  )
}

export default Error