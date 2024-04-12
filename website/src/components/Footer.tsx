'use client'
import Link from 'next/link'
import logo from '@/images/logos/logo.svg'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import { useCallback, useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (!email) {
        alert('Please enter your email address.')
        return
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.')
        return
      }

      const body = {
        email: email,
      }

      try {
        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })

        if (response.ok) {
          alert('Success! You have been signed up.')

          setEmail('')
        } else {
          if (response.status === 409) {
            alert('This email address is already registered.')
          } else {
            alert('Something went wrong. Please try again.')
          }
        }
      } catch (error) {
        console.error('An unexpected error occurred:', error.message)
      }
    },
    [email],
  )

  return (
    <footer className="bg-gray-200">
      <Container>
        <div className="py-16">
          <div className="mx-auto flex h-10 w-auto items-center gap-5 font-semibold uppercase text-blue-500">
            <Image src={logo} alt={''} height={40} width={40} />
            HashGuard Media
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <ul className="-my-1 grid grid-cols-1 justify-center gap-5 gap-x-6 lg:grid-cols-5">
              <li className="lg:border-r lg:border-slate-400/20">
                <h3 className="mb-2 font-semibold uppercase text-blue-500">
                  Legal
                </h3>
                <ul>
                  <li>
                    <Link
                      href="/legal/privacy-policy"
                      className="hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal/terms-of-service"
                      className="hover:underline"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal/cookie-policy"
                      className="hover:underline"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="lg:border-r lg:border-slate-400/20">
                <h3 className="mb-2 font-semibold uppercase text-blue-500">
                  Community
                </h3>
                <ul>
                  <li>
                    <Link
                      href="https://github.com/nicolopadovan/HashGuardMedia"
                      className="hover:underline"
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:underline">
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:underline">
                      Blog
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="lg:border-r lg:border-slate-400/20">
                <h3 className="mb-2 font-semibold uppercase text-blue-500">
                  Funding
                </h3>
                <ul>
                  <li>
                    <Link href="/donate" className="hover:underline">
                      Donate now
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:underline">
                      Open Collective
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:underline">
                      GitHub Sponsors
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="flex flex-col items-start lg:col-span-2">
                <label
                  htmlFor="price"
                  className="mb-2 font-semibold uppercase text-blue-500"
                >
                  Newsletter
                </label>

                <p className="tracking-tight text-black">
                  Stay informed about news and updates.
                </p>
                <p className="tracking-tight text-black">
                  We promise to keep your inbox free of clutter, focusing only
                  on meaningful updates and exciting milestones.
                </p>

                <form className="block w-full" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your email address"
                    aria-describedby="price-currency"
                    required
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                  />

                  <button
                    type="submit"
                    className="mt-4 flex flex-row items-center justify-start gap-5 rounded-full bg-blue-600 px-6 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Sign Up
                  </button>
                </form>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link href="#" className="group" aria-label="TaxPal on X">
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/nicolopadovan/HashGuardMedia"
              className="group"
              aria-label="TaxPal on GitHub"
            >
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} HashGuard Media. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
