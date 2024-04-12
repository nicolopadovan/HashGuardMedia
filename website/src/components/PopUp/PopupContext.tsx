// app/components/PopupContext.tsx

import { createContext, useContext, ReactNode } from 'react'
import { PopUpConfig } from './PopupProvider.client'

interface PopupActions {
  openPopup: (config: PopUpConfig) => void
  closePopup: () => void
}

const PopupContext = createContext<PopupActions | undefined>(undefined)

export const usePopup = () => {
  const context = useContext(PopupContext)
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider')
  }
  return context
}

export default PopupContext
