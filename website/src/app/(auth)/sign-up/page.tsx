import Link from 'next/link'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import logo from '@/images/logos/logo.svg'
import Image from 'next/image'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Image src={logo} alt={''} height={40} width={40} />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">Sign up</h2>
      <p className="mt-2 text-sm text-gray-700">
        HashGuard Media is currently under active development. Our team is
        working tirelessly to bring you the best protection for your digital
        assets.
      </p>
      <p className="mt-2 text-sm text-gray-700">
        Sign up to be notified when we launch.
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          label="First name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />
        <TextField
          label="Last name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />

        <div className="relative col-span-full flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="comments">
              <span className="font-medium text-gray-900">I agree </span>
              <span id="comments-description" className="text-gray-500">
                <span className="sr-only">I agree </span>
                to receive communications from HashGuard Media so I can stay
                informed about news and updates.
              </span>
            </label>
          </div>
        </div>

        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign up <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>

          <p className="mt-3 text-sm text-gray-700">
            We promise to keep your inbox free of clutter, focusing only on
            meaningful updates and exciting milestones.
          </p>
        </div>
      </form>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Why Sign Up Now?
      </h2>
      <ul>
        <li className="mt-2 text-sm text-gray-700">
          <strong>Early Access</strong>: Be among the first to experience the
          platform&apos;s features and capabilities. &rsquo;
        </li>
        <li className="mt-2 text-sm text-gray-700">
          <strong>Exclusive Updates</strong>: Receive the latest news, progress
          reports, and behind-the-scenes insights directly to your inbox.
        </li>
        <li className="mt-2 text-sm text-gray-700">
          <strong>Shape the Future</strong>: Your feedback can influence the
          final product, ensuring it meets the community&apos;s needs and
          expectations.
        </li>
        <li className="mt-2 text-sm text-gray-700">
          <strong>Special Invitations</strong>: Get invited to exclusive beta
          testing opportunities, webinars, and community events.
        </li>
        <li className="mt-2 text-sm text-gray-700">
          <strong>Join a Community</strong>: Become part of a movement dedicated
          to making digital media trustworthy and transparent.
        </li>
      </ul>
    </SlimLayout>
  )
}
