import dynamic from 'next/dynamic'

const DynamicPopupProvider = dynamic(
  async () => import('@/components/PopUp/PopupProvider.client'),
  {
    ssr: false,
  },
)

export default DynamicPopupProvider
