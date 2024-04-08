import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function OurProject() {
  return (
    <>
      <Header />
      <main>
        <Hero
          heading={
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
              HashGuard Media is produly{' '}
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
        <Container>
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">
            Empower Your Digital Content. Protect Its Authenticity.
          </h2>
          <p>
            At HashGuard Media, our mission is rooted in the belief that
            authenticity and integrity should be the cornerstones of all digital
            media. In an era where digital content shapes perceptions,
            influences decisions, and narrates the world's stories, ensuring the
            credibility of this content is not just important—it's imperative.
          </p>
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">
            Our Commitment to Open Source and Freedom of Use
          </h2>
          <p>
            We stand firmly on the principles of openness and accessibility.
            HashGuard Media is an open-source project, embodying a commitment to
            transparency, community collaboration, and innovation. By making our
            technology freely available, we empower creators, developers, and
            organizations to protect the integrity of their media, foster trust
            with their audiences, and contribute to a more authentic digital
            world.
          </p>
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">
            Unwavering Neutrality
          </h2>
          <p>
            Our platform is designed with a steadfast commitment to
            impartiality. HashGuard Media refuses to be swayed by external
            influences, ensuring our technology remains unbiased, secure, and
            reliable. We believe in providing a tool that serves the interests
            of all users equally, fostering an environment of trust and
            integrity.
          </p>
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">
            The Threat We Combat
          </h2>
          <p>
            In the face of rising concerns over deepfakes, unauthorized content
            manipulation, and misinformation, HashGuard Media provides a beacon
            of trust. Our innovative use of steganography, cryptographic
            signatures, and blockchain technology offers a robust solution for
            verifying the authenticity of digital media. We are at the forefront
            of combating the threat posed by digital forgeries, protecting the
            public discourse and the truth it relies upon.
          </p>
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">
            Join Our Journey
          </h2>
          <p>
            HashGuard Media is more than just a project; it's a community-driven
            movement towards securing digital authenticity. We invite you to
            join us in this critical mission. Whether you are a developer
            interested in contributing to our codebase, a content creator
            seeking to safeguard your work, or an organization aiming to ensure
            the integrity of your digital content, HashGuard Media is your
            partner in building a more trustworthy digital future. Together, we
            can redefine the landscape of digital media, ensuring that truth and
            authenticity prevail in the digital age.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  )
}
