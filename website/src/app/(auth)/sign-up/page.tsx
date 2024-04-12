import { SlimLayout } from '@/components/SlimLayout'
import DynamicPopupProvider from '@/components/PopUp/DynamicPopUpProvider'
import SignUpForm from '@/components/SignUpForm'

export default function Register() {
  return (
    <SlimLayout>
      <h2 className="text-lg font-semibold text-gray-900">Sign up</h2>
      <p className="mt-2 text-sm text-gray-700">
        HashGuard Media is currently under active development. Our team is
        working tirelessly to bring you the best protection for your digital
        assets.
      </p>
      <p className="mt-2 text-sm text-gray-700">
        Sign up to be notified when we launch.
      </p>

      <DynamicPopupProvider>
        <SignUpForm />
      </DynamicPopupProvider>

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
