"use client"

import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <h1 className='text-7xl font-bold mb-4'>{ count }</h1>
      <div className='space-x-4'>
        <button className='btn btn-primary' onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className='btn btn-warning' onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button className='btn btn-error' onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter