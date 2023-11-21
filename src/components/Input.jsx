import React from 'react'

function Input({Type,Name,Class,PlaceHolder,Required}) {
  return (
    <>
      <input type={Type} name={Name} class={`form-control ${Class}`} placeholder={PlaceHolder} required={Required} />
    </>
  )
}

export default Input
