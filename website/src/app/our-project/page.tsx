import bruceschneier from '@/images/avatars/bruceschneier.jpeg'
import { Container } from '@/components/Container'
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'
import { Hero } from '@/components/Hero'
import Image from 'next/image'

export default function OurProject() {
  return (
    <>
      <main>
        <Hero
          heading={
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
              HashGuard Media is proudly{' '}
              <span className="relative whitespace-nowrap text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">Open Source.</span>
              </span>
            </h1>
          }
          subheading="At HashGuard Media, our mission is rooted in the belief that authenticity and integrity should be the cornerstones of all digital media. In an era where digital content shapes perceptions, influences decisions, and narrates the world's stories, ensuring the credibility of this content is not just important—it's imperative."
          cta={{
            label: 'Discover more',
            href: '#',
          }}
        />

        <div className="bg-white px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-blue-600">
              HashGuard Media
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empower Your Digital Content. Protect Its Authenticity.
            </h1>
            <p className="mt-6 text-xl leading-8">
              At HashGuard Media, our mission is rooted in the belief that
              authenticity and integrity should be the cornerstones of all
              digital media. In an era where digital content shapes perceptions,
              influences decisions, and narrates the world&apos;s stories,
              ensuring the credibility of this content is not just
              important—it&apos;s imperative.
            </p>
            <div className="mt-10 max-w-2xl">
              <p>
                We stand firmly on the principles of openness and accessibility.
                HashGuard Media is an open-source project, embodying a
                commitment to transparency, community collaboration, and
                innovation. By making our technology freely available, we
                empower creators, developers, and organizations to protect the
                integrity of their media, foster trust with their audiences, and
                contribute to a more authentic digital world.
              </p>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Our Commitment to Open Source and Freedom of Use.
                    </strong>{' '}
                    We stand firmly on the principles of openness and
                    accessibility. HashGuard Media is an open-source project,
                    embodying a commitment to transparency, community
                    collaboration, and innovation. By making our technology
                    freely available, we empower creators, developers, and
                    organizations to protect the integrity of their media,
                    foster trust with their audiences, and contribute to a more
                    authentic digital world.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Unwavering Neutrality.
                    </strong>{' '}
                    Our platform is designed with a steadfast commitment to
                    impartiality. HashGuard Media refuses to be swayed by
                    external influences, ensuring our technology remains
                    unbiased, secure, and reliable. We believe in providing a
                    tool that serves the interests of all users equally,
                    fostering an environment of trust and integrity.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      The Threat We Combat.
                    </strong>{' '}
                    In the face of rising concerns over deepfakes, unauthorized
                    content manipulation, and misinformation, HashGuard Media
                    provides a beacon of trust. Our innovative use of
                    steganography, cryptographic signatures, and blockchain
                    technology offers a robust solution for verifying the
                    authenticity of digital media. We are at the forefront of
                    combating the threat posed by digital forgeries, protecting
                    the public discourse and the truth it relies upon.
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Join Our Journey
              </h2>
              <p className="mt-6">
                HashGuard Media is more than just a project; it&apos;s a
                community-driven movement towards securing digital authenticity.
                We invite you to join us in this critical mission.
              </p>
              <figure className="mt-10 border-l border-blue-600 pl-9">
                <blockquote className="font-semibold text-gray-900">
                  <p>
                    "A well-crafted deepfake video of a CEO announcing a
                    corporate disaster could temporarily crash the company's
                    stock price. A deepfake video of a soldier committing war
                    crimes could turn a country against another. Deepfake videos
                    can be used in any number of ways to manipulate our
                    individual and collective perceptions of reality."
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4">
                  <Image
                    className="h-6 w-6 flex-none rounded-full bg-gray-50"
                    src={bruceschneier}
                    alt=""
                  />
                  <div className="text-sm leading-6">
                    <strong className="font-semibold text-gray-900">
                      Bruce Schneier
                    </strong>{' '}
                    Security Expert
                  </div>
                </figcaption>
              </figure>
              <p className="mt-10">
                Whether you are a developer interested in contributing to our
                codebase, a content creator seeking to safeguard your work, or
                an organization aiming to ensure the integrity of your digital
                content, HashGuard Media is your partner in building a more
                trustworthy digital future. Together, we can redefine the
                landscape of digital media, ensuring that truth and authenticity
                prevail in the digital age.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
