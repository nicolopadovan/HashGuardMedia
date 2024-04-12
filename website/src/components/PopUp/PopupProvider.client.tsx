'use client'
// app/components/PopupProvider.client.tsx

import { useState, ReactNode, FC } from 'react'
import PopupContext from './PopupContext'
import dynamic from 'next/dynamic'

const PopupPortal = dynamic(() => import('./PopupPortal.client'), {
  ssr: false,
})

interface PopupProviderProps {
  children: ReactNode
}

export interface PopUpConfig {
  title: string
  description: string
  cancelBtnText: string
  confirmBtnText?: string
  confirmAction?: () => void
}

const PopupProvider: FC<PopupProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [popupContent, setPopupContent] = useState<PopUpConfig>({
    title: '',
    description: '',
    cancelBtnText: '',
    confirmBtnText: '',
    confirmAction: () => {},
  })

  const openPopup = (config: PopUpConfig) => {
    setPopupContent(config)
    setIsOpen(true)
  }

  const closePopup = () => {
    setIsOpen(false)
    setPopupContent({
      title: '',
      description: '',
      cancelBtnText: '',
      confirmBtnText: '',
      confirmAction: () => {},
    })
  }

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      <PopupPortal config={popupContent} open={isOpen} setOpen={setIsOpen} />
    </PopupContext.Provider>
  )
}

export default PopupProvider
