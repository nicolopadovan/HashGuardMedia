'use client'

import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const Portal = ({ children, selector }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [selector])

  return mounted
    ? ReactDOM.createPortal(children, document.querySelector(selector))
    : null
}

export default Portal
