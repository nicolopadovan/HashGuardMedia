import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export interface HeroProps {
  heading: React.ReactNode
  subheading: React.ReactNode
  cta: {
    label: string
    href: string
  }
}

export function Hero({ heading, subheading, cta }: HeroProps) {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      {heading}
      <div className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        {subheading}
      </div>
      <div className="mt-20 flex justify-center gap-x-6">
        <Button href={cta.href}>{cta.label}</Button>
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button>
      </div>
    </Container>
  )
}
