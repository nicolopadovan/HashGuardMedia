import Image from 'next/image'

import { Container } from '@/components/Container'
import satyanadella from '@/images/avatars/satyanadella.png'
import haoli from '@/images/avatars/haoli.jpeg'
import bruceschneier from '@/images/avatars/bruceschneier.jpeg'
import ninaschick from '@/images/avatars/ninaschick.jpeg'
import marcgoodman from '@/images/avatars/marcgoodman.jpeg'
import subrahmanyamkalyanasundaram from '@/images/avatars/SubrahmanyamKalyanasundaram.jpeg'

const testimonials = [
  [
    {
      content:
        "Now a person can create a video that shows her saying anything and have it look real… that's how far the technology has come today.",
      author: {
        name: 'Satya Nadella',
        role: 'CEO of Microsoft',
        image: satyanadella,
      },
    },
    {
      content:
        'You cannot trust anything you see online anymore... Deepfakes break the fundamental way we establish trust with our own senses. It erodes that trust and it will force us all to become far more skeptical about what we see and what we hear online.',
      author: {
        name: 'Hao Li',
        role: 'CEO of Pinscreen',
        image: haoli,
      },
    },
  ],
  [
    {
      content:
        "A well-crafted deepfake video of a CEO announcing a corporate disaster could temporarily crash the company's stock price. A deepfake video of a soldier committing war crimes could turn a country against another. Deepfake videos can be used in any number of ways to manipulate our individual and collective perceptions of reality.",
      author: {
        name: 'Bruce Schneier',
        role: 'Security Expert',
        image: bruceschneier,
      },
    },
    {
      content:
        "Within the next five years we're going to get to a point where it becomes almost impossible, both from a cognitive and a technical perspective, to be able to determine whether content is real or fake. And that is incredibly worrying because the implications are vast.",
      author: {
        name: 'Nina Schick',
        role: 'Author of "Deepfakes: The Coming Infocalypse"',
        image: ninaschick,
      },
    },
  ],
  [
    {
      content:
        'I would say that deepfakes represent the most significant threat to democracy that we have ever seen. These new technologies allow people to undermine the credibility of all information — all information.',
      author: {
        name: 'Marc Goodman',
        role: 'Cybersecurity expert and author of "Future Crimes"',
        image: marcgoodman,
      },
    },
    {
      content:
        'Deepfakes are the weaponization of synthetic media and an evolving cyber threat. While deepfakes hold the promise to be a force for creativity and artistic expression… they also have the potential to disrupt industries through misinformation and fraud.',
      author: {
        name: 'Subrahmanyam Kalyanasundaram',
        role: 'CTO at Clumio',
        image: subrahmanyamkalyanasundaram,
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Voices Against Digital Deception
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Leading minds in technology and security unite in their concern over
            AI and DeepFakes, highlighting the urgent need for trusted,
            authentic digital media.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
