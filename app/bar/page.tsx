import React from 'react'

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z"

const Bar = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed API request');
  }

  const data = await response.json();

  console.log(data);

  return (
    <div>Bar</div>
  )
}

export default Bar