import { Hero } from '@/components/Hero'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

export default function Technology() {
  return (
    <>
      <Hero
        heading={
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">Innovating Trust</span>
            </span>{' '}
            in Digital Media
          </h1>
        }
        subheading={
          'Leveraging cutting-edge technology to secure the authenticity and integrity of digital content.'
        }
        cta={{
          label: 'Start protecting your content now',
          href: '/register',
        }}
      />

      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-blue-600">
                  Deploy faster
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Technology
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  We are committed to developing cutting-edge technology that is
                  accessible, secure, and transparent.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Digital media shapes our perception of reality, yet its
                  authenticity has never been more uncertain. HashGuard Media
                  confronts this challenge head-on, utilizing a fusion of
                  blockchain, steganography, and advanced cryptography to ensure
                  that every piece of digital content can be trusted. Our
                  open-source platform marks a new era of media integrity,
                  making digital deception a thing of the past.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="block font-semibold text-gray-900">
                        Steganography.
                      </strong>{' '}
                      Steganography, the art of hiding information within
                      digital media, serves as the backbone of our authenticity
                      markers. By invisibly embedding digital signatures within
                      images and videos, HashGuard Media ensures that the
                      authenticity and origin of digital content are preserved
                      without compromising the original aesthetics or quality.
                      This invisible layer of security enables the verification
                      of media authenticity, protecting against unauthorized
                      alterations and maintaining the integrity of the original
                      creation.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="block font-semibold text-gray-900">
                        Cryptographic Hashing and Digital Signatures.
                      </strong>{' '}
                      Through cryptographic hashing, HashGuard Media transforms
                      each piece of media into a unique digital fingerprint,
                      which is then secured with a digital signature. This
                      process not only asserts the originality and integrity of
                      digital content but also creates an unbreakable bond
                      between the content and its creator. By encrypting this
                      fingerprint with a private key, we ensure that any
                      tampering with the media can be easily detected,
                      establishing a secure and trustable framework for digital
                      media authenticity.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="block font-semibold text-gray-900">
                        Public Key Infrastructure (PKI)
                      </strong>{' '}
                      Public Key Infrastructure (PKI) is the framework enabling
                      the management of digital certificates, keys, and
                      signatures crucial for secure electronic transactions. In
                      the context of HashGuard Media, PKI facilitates a secure
                      verification process, allowing anyone to authenticate the
                      origin and integrity of digital media without needing
                      access to sensitive private keys. This system of digital
                      trust underscores our commitment to privacy and security,
                      ensuring that authenticity is verifiable in a
                      decentralized manner.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="block font-semibold text-gray-900">
                        Blockchain
                      </strong>{' '}
                      Blockchain technology is renowned for its ability to
                      provide a decentralized, immutable ledger, ideal for
                      transparent and tamper-proof record-keeping. At HashGuard
                      Media, we leverage blockchain to record the digital
                      fingerprints and signatures of media, offering an
                      indisputable and permanent record of authenticity and
                      ownership. This not only enhances the security of digital
                      content but also ensures that every piece of media can be
                      traced back to its origin, fostering an environment of
                      trust and accountability in the digital world.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="block font-semibold text-gray-900">
                        Zero-Knowledge Proofs (ZKP)
                      </strong>{' '}
                      Zero-Knowledge Proofs (ZKP) offer a revolutionary approach
                      to privacy-preserving authentication, allowing the
                      verification of information without revealing the
                      information itself. Within HashGuard Media’s platform, ZKP
                      enables the authentication of media content’s integrity
                      and origin while safeguarding the privacy of the embedded
                      data and the identities of the parties involved. This
                      cutting-edge technology ensures that our verification
                      processes respect the confidentiality of digital media and
                      the people behind it, promoting a secure yet anonymous
                      verification ecosystem.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="block font-semibold text-gray-900">
                        Dynamic Watermarking
                      </strong>{' '}
                      Dynamic watermarking adapts to different viewing
                      conditions, offering a resilient method to protect digital
                      content against unauthorized use and distribution. By
                      implementing dynamic watermarking, HashGuard Media
                      introduces an additional layer of security that
                      discourages misuse and tampering, ensuring that creators'
                      rights are protected under various conditions. This
                      innovative approach not only challenges the conventional
                      limitations of static watermarks but also reinforces the
                      integrity and rightful ownership of digital media,
                      adapting seamlessly to the evolving digital landscape.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  By combining these technologies, HashGuard Media has developed
                  a comprehensive solution for securing the authenticity and
                  integrity of digital media. Our platform empowers creators,
                  organizations, and consumers to trust the content they create,
                  share, and consume, fostering a digital ecosystem built on
                  transparency, security, and accountability.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  How It Works
                </h2>
                <p className="mt-6">
                  A digital masterpiece is uploaded to our platform, where it’s
                  instantly fingerprinted, signed, and cloaked in layers of
                  security. Our blockchain ledger becomes its unbreakable
                  shield, recording its birthmark for eternity. Verification
                  becomes a simple, secure act, accessible to all yet revealing
                  to none the secrets it holds.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Innovations at HashGuard Media
                </h2>
                <p className="mt-6">
                  Our proprietary blend of dynamic watermarking and
                  zero-knowledge proof verification is just the start. We're
                  constantly pushing the boundaries, developing tools that not
                  only secure digital content but also respect privacy and
                  promote transparency. These innovations aren't just ours;
                  they're contributions to a future where digital truth is
                  undeniable.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Why Open Source Matters
                </h2>
                <p className="mt-6">
                  In a world craving transparency, open source is our
                  foundation. It invites scrutiny, fosters trust, and drives
                  innovation through collaboration. By opening our technology to
                  the world, we empower developers, creators, and advocates to
                  join us in our mission, ensuring that our solutions remain at
                  the forefront of digital integrity.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Get Involved
                </h2>
                <p className="mt-6">
                  Whether you're a coder looking to contribute, a researcher
                  seeking to delve deeper, or simply someone passionate about
                  the truth in media, your journey starts here. Dive into our
                  code, explore our technologies, or reach out with your ideas.
                  Together, we can build a future of authentic digital
                  expression.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  FAQs
                </h2>
                <p className="mt-6">
                  Got questions? We've got answers. From understanding the
                  basics of blockchain to exploring the depths of digital
                  signatures, our FAQ section is here to demystify our
                  technology and its applications. Discover how we're making
                  digital media trustworthy again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
