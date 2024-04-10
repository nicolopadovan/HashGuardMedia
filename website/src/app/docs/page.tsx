import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  BookmarkSquareIcon,
  BookOpenIcon,
  QueueListIcon,
  RssIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'

const links = [
  {
    name: 'Home',
    href: '/',
    description: 'Return to the homepage.',
    icon: BookOpenIcon,
  },
  {
    name: 'Our Project',
    href: 'our-project',
    description: 'Learn more about HashGuard Media.',
    icon: QueueListIcon,
  },
  {
    name: 'Technology',
    href: '/',
    description: 'Explore the technology behind HashGuard Media.',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Get Involved',
    href: 'get-involved',
    description: 'Join the HashGuard Media community.',
    icon: RssIcon,
  },
]

export default function Docs() {
  return (
    <div className="bg-white">
      <main className="mx-auto mt-10 w-full max-w-7xl px-6 pb-16 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-8 text-blue-600">
            Under development
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            HashGuard Media Docs
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            The HashGuard Media documentation is currently under development.
            Check back soon for updates!
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <h2 className="sr-only">Popular pages</h2>
          <ul
            role="list"
            className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5"
          >
            {links.map((link, linkIdx) => (
              <li key={linkIdx} className="relative flex gap-x-6 py-6">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                  <link.icon
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    <Link href={link.href}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {link.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {link.description}
                  </p>
                </div>
                <div className="flex-none self-center">
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-blue-600"
            >
              <span aria-hidden="true">&larr;</span>
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
