import { Hero } from '@/components/Hero'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '37' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
]

export default function GetInvolved() {
  return (
    <>
      <Hero
        heading={
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Join Our Crusade for{' '}
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">Digital Authenticity</span>
            </span>
          </h1>
        }
        subheading="Dive into a world where your skills and passion become the cornerstone of trust in digital media. Be part of HashGuard Media—where together, we shape a future founded on integrity and transparency."
        cta={{
          label: 'Discover more',
          href: '#',
        }}
      />

      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
              <figure className="relative isolate">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                >
                  <path
                    id="0ef284b8-28c2-426e-9442-8655d393522e"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x={86} />
                </svg>
                <img
                  src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                  alt=""
                  className="h-12 w-auto"
                />
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus tortor.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                  <strong className="font-semibold text-white">
                    Judith Rogers,
                  </strong>{' '}
                  CEO at Workcation
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 sm:pb-32 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none xl:w-1/2">
              <p className="text-base font-semibold leading-7 text-blue-600">
                Contribute to the Codebase
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                For Developers
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Whether you're fixing bugs, adding features, or improving
                documentation, your contributions are invaluable.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <p>Here’s how to get started:</p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Fork and Clone
                      </strong>{' '}
                      Fork our repository on GitHub and clone it to your local
                      machine.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Pick an Issue
                      </strong>{' '}
                      Browse our issues list to find something that excites you.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Submit a Pull Request
                      </strong>{' '}
                      Make your changes and submit a pull request for review.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  <strong className="block font-semibold text-gray-900">
                    Guidelines for Contribution
                  </strong>{' '}
                  To maintain the quality of our project, we ask that all
                  contributors adhere to our{' '}
                  <Link
                    href="/guidelines/contributions"
                    className="text-blue-500 underline"
                  >
                    Contribution Guidelines
                  </Link>
                  . These include coding standards, commit message formatting,
                  and how to submit a successful pull request.
                </p>
                <p className="mt-8">
                  <strong className="block font-semibold text-gray-900">
                    Development Roadmap
                  </strong>{' '}
                  Curious about what’s next for HashGuard Media? Our{' '}
                  <Link href="/roadmap" className="text-blue-500 underline">
                    Roadmap
                  </Link>{' '}
                  outlines our future plans and highlights where we need the
                  most help. Let’s innovate together.
                </p>
                <p className="mt-8">
                  <strong className="block font-semibold text-gray-900">
                    Open Source Repository
                  </strong>{' '}
                  Our entire codebase is open for you to explore and contribute
                  to. Visit our{' '}
                  <Link
                    href="https://github.com/nicolopadovan/HashGuardMedia"
                    className="text-blue-500 underline"
                  >
                    GitHub Repository
                  </Link>{' '}
                  to start making a difference today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-start">
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <p className="text-base font-semibold leading-7 text-blue-600">
                Join Our Community Efforts
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                For Enthusiasts and Volunteers
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Your enthusiasm fuels our project. Here’s how you can get
                involved:
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Engage
                      </strong>{' '}
                      Join our conversations on social media and our community
                      forums. Your voice matters.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Volunteer
                      </strong>{' '}
                      We’re always in need of passionate individuals for various
                      roles – no coding required.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Hear From Our Volunteers
                      </strong>{' '}
                      Read testimonials from our dedicated volunteers on the
                      impact you can make.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  <strong className="block font-semibold text-gray-900">
                    Community Guidelines
                  </strong>{' '}
                  To ensure a welcoming and inclusive environment, we ask that
                  all community members adhere to our{' '}
                  <Link
                    href="/guidelines/community"
                    className="text-blue-500 underline"
                  >
                    Community Guidelines
                  </Link>
                  . These include respectful communication, constructive
                  feedback, and how to report issues.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:left-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <img
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-blue-600">
              Deploy faster
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A better workflow
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p className="text-base font-semibold leading-7 text-blue-600">
                  Keep Up with HashGuard Media
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Stay Connected
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Stay updated and join us at upcoming hackathons, webinars, and
                  meetups to meet fellow community members and learn more about
                  our work.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <CloudArrowUpIcon
                        className="mt-1 h-5 w-5 flex-none text-blue-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Newsletter
                        </strong>{' '}
                        Sign up for our newsletter{' '}
                        <Link
                          href="/sign-up"
                          className="text-blue-500 underline"
                        >
                          here
                        </Link>{' '}
                        for regular updates straight to your inbox.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <LockClosedIcon
                        className="mt-1 h-5 w-5 flex-none text-blue-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Follow Us
                        </strong>{' '}
                        Stay engaged and join the conversation on{' '}
                        <Link
                          href="/guidelines/contributions"
                          className="text-blue-500 underline"
                        >
                          Twitter
                        </Link>
                        ,{' '}
                        <Link
                          href="/guidelines/contributions"
                          className="text-blue-500 underline"
                        >
                          LinkedIn
                        </Link>
                        , and{' '}
                        <Link
                          href="/guidelines/contributions"
                          className="text-blue-500 underline"
                        >
                          Facebook
                        </Link>
                        .
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <LockClosedIcon
                        className="mt-1 h-5 w-5 flex-none text-blue-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Join the Discussion
                        </strong>{' '}
                        Our community forums and chat platforms are the perfect
                        places to ask questions, share ideas, and connect with
                        others.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="text-base font-semibold leading-7 text-blue-600">
                  Connect at Our Events
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Events and Meetups
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Stay updated and join us at upcoming hackathons, webinars, and
                  meetups to meet fellow community members and learn more about
                  our work.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <CloudArrowUpIcon
                        className="mt-1 h-5 w-5 flex-none text-blue-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Upcoming Events
                        </strong>{' '}
                        Check out our{' '}
                        <Link href="/" className="text-blue-500 underline">
                          events calendar
                        </Link>{' '}
                        for what’s coming up.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <LockClosedIcon
                        className="mt-1 h-5 w-5 flex-none text-blue-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Organize Your Own
                        </strong>{' '}
                        Interested in hosting a HashGuard Media event? We’ve got
                        you covered with our event organization guide.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <LockClosedIcon
                        className="mt-1 h-5 w-5 flex-none text-blue-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Past Events
                        </strong>{' '}
                        Missed an event? Catch up on our past webinars and
                        meetups with our{' '}
                        <Link
                          href="/not-found"
                          className="text-blue-500 underline"
                        >
                          event recordings
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
              alt=""
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
