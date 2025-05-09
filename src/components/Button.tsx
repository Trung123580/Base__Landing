
import React from 'react'

type ButtonCommon = {
  children?: React.ReactNode
  onClick?: (e?: any) => void
  className?: string
  disabled?: boolean
}
const Button = ({children, onClick, className, disabled}: ButtonCommon) => {
  return (
    <button onClick={onClick} type="button" disabled={disabled} className={className}>
      {children}
    </button>
  )
}

export default Button
