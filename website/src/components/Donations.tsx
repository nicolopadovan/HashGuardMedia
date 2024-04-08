import Image from 'next/image'
import backgroundImage from '@/images/background-features.jpg'
import { Container } from './Container'
import { Button } from './Button'

const stats = [
  {
    id: 1,
    title: 'Development',
    description:
      'Fueling innovation and advancements in media integrity technology.',
  },
  {
    id: 2,
    title: 'Accessibility',
    description:
      'Keeping our cutting-edge platform free and open for everyone.',
  },
  {
    id: 3,
    title: 'Education',
    description:
      'Empowering users with knowledge to discern truth in digital media.',
  },
]

export default function Donations() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />

      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Why donate?
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Your donations play a crucial role in multiple aspects of our
            project.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Discover more
          </Button>

          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col p-8">
                  <dt className="text-sm font-semibold leading-6 text-white">
                    {stat.description}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {stat.title}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}
