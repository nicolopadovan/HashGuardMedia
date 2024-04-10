import Image from 'next/image'
import backgroundImage from '@/images/background-auth.jpg'
import React from 'react'

interface Props {
  children: React.ReactNode
}

type SlimLayoutProps = Props & React.HTMLAttributes<HTMLDivElement>

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function SlimLayout(props: SlimLayoutProps) {
  return (
    <>
      <div
        className={classNames(
          'relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0',
          props.className,
        )}
      >
        <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
          <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            {props.children}
          </main>
        </div>
        <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={backgroundImage}
            alt=""
            unoptimized
          />
        </div>
      </div>
    </>
  )
}
