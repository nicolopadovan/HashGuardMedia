'use client'

import { usePopup } from '@/components/PopUp/PopupContext'
import { FC, ReactNode } from 'react'

const SomeFeatureComponent: FC = () => {
  const { openPopup } = usePopup()

  const handleClick = () => {
    const popupContent: ReactNode = <p>This is the popup content!</p>
    openPopup(popupContent)
  }

  return <button onClick={handleClick}>Open Popup</button>
}

export default SomeFeatureComponent
