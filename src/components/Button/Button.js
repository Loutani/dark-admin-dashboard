import React from 'react'

function Button({label, classname}) {
  return (
    <button className={classname}>{label}</button>
  )
}

export default Button