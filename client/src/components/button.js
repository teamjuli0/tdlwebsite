import React from 'react'

const Button = props => (
  <button
    {...props}
    style={{ margin: 5, marginTop: 0 }}
    type='button'
    className='btn btn-outline-light'
  >
    {props.name}
  </button>
)

export default Button
