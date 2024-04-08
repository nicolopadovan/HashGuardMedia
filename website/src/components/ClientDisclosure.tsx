'use client'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

export interface DisclosureContent {
  label: string
  content: string
}

export default function ClientDisclosure(content: {
  faqs: DisclosureContent[]
}) {
  return content.faqs.map((faq, index) => (
    <Disclosure key={index} defaultOpen={false}>
      {({ open }) => (
        <div>
          <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-sm font-medium text-slate-900 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
            <span className="font-display text-lg leading-7 text-slate-900">
              {faq.label}
            </span>
            <ChevronUpIcon
              className={`${
                open ? '' : 'rotate-180 transform'
              } h-5 w-5 text-slate-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-4 text-sm text-slate-700">
            {faq.content}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  ))
}
