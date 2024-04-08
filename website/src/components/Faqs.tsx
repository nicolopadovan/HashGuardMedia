import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import ClientDisclosure, {
  DisclosureContent,
} from '@/components/ClientDisclosure'
import { Button } from './Button'

const faqs: DisclosureContent[] = [
  {
    label: 'What is HashGuard Media?',
    content:
      'HashGuard Media is a cutting-edge platform designed to protect digital content creators from the risks of DeepFakes and unauthorized AI-generated content through advanced steganography, cryptographic hashing, and digital signatures.',
  },
  {
    label: 'How does HashGuard Media protect against DeepFakes?',
    content:
      'By embedding a unique, cryptographic signature directly into the media file using steganography, HashGuard Media ensures that any piece of content can be verified as authentic and unaltered, helping to guard against DeepFake manipulations.',
  },
  {
    label: 'What types of content can HashGuard Media protect?',
    content:
      'Currently, HashGuard Media focuses on protecting image files. Future updates are planned to extend protection to videos and other digital media formats.',
  },
  {
    label: 'Is the embedded signature visible on the media?',
    content:
      'No, the signature is invisibly embedded within the media file using steganography, ensuring the visual quality of your content remains unchanged.',
  },
  {
    label: 'How does the verification process work?',
    content:
      'Anyone with access to the public key can verify the authenticity of a protected file, ensuring that the content and its signature match the original file as signed by the creator.',
  },
  {
    label: 'What is a public key infrastructure (PKI)?',
    content:
      'PKI is a system used to manage digital signatures and encryption keys, enabling secure electronic transfer of information. HashGuard Media uses PKI to manage the keys necessary for signing and verifying content.',
  },
  {
    label: 'How does blockchain technology enhance HashGuard Media’s security?',
    content:
      'HashGuard Media utilizes blockchain technology to create an immutable record of each piece of content’s signature and its corresponding verification status, enhancing the trust and traceability of digital content.',
  },
  {
    label:
      'What are Zero-Knowledge Proofs, and how does HashGuard Media use them?',
    content:
      'Zero-Knowledge Proofs (ZKP) allow HashGuard Media to verify the authenticity of content without revealing the content itself or its embedded signature, ensuring privacy and security in verification processes.',
  },
  {
    label: 'Can HashGuard Media prevent all forms of digital content fraud?',
    content:
      'While HashGuard Media significantly enhances the security and verifiability of digital content, no system can guarantee absolute protection against all forms of fraud. It’s an important layer of defense in a comprehensive digital security strategy.',
  },
  {
    label:
      'Is HashGuard Media suitable for individual creators or large enterprises?',
    content:
      'HashGuard Media offers flexible solutions tailored for both individual creators and large enterprises, with scalable protection to meet diverse needs.',
  },
  {
    label: 'How can I get started with HashGuard Media?',
    content:
      'Getting started is easy. Simply sign up on our website, upload your digital content, and our platform will guide you through the process of protecting your media.',
  },
  {
    label: 'Are there any fees associated with using HashGuard Media?',
    content:
      'HashGuard Media offers various pricing plans based on your protection needs, from basic to advanced features. Details on specific plans and pricing are available on our website.',
  },
  {
    label: 'Can HashGuard Media’s protection be removed from a file?',
    content:
      'The protection is designed to be tamper-evident. Any attempt to alter or remove the embedded signature will invalidate the authentication, signaling that the content has been tampered with.',
  },
  {
    label: 'What happens if I lose my private key?',
    content:
      'Losing your private key means you cannot sign new content or verify previously signed content as the original creator. It’s crucial to securely back up your private key.',
  },
  {
    label: 'How does HashGuard Media handle image compression?',
    content:
      'HashGuard Media’s advanced steganography techniques are designed to be resilient against common image compressions. While minor alterations may not affect the verification process, significant compression could impact the integrity of the embedded signature.',
  },
  {
    label:
      'Can HashGuard Media protected images be resized or cropped without affecting the signature?',
    content:
      'Minor resizing and cropping may not affect the signature, provided that a significant portion of the image where the signature is embedded remains intact. However, extensive alterations could invalidate the signature, as the embedded data may be partially or wholly removed.',
  },
  {
    label:
      'What about other forms of non-tampering alterations, like color adjustments?',
    content:
      "Non-tampering alterations that do not significantly alter the pixel data where the signature is embedded (such as mild color adjustments or filtering) are unlikely to affect the signature’s integrity. However, extensive modifications could potentially impact the signature's verifiability.",
  },
  {
    label:
      'Is there a way to recover a signature if an image has been accidentally altered?',
    content:
      'Once an image has been altered in a way that affects the signature, the original signature cannot be recovered because the alteration changes the data that the signature was verifying. It’s important to keep original, unaltered copies of important content for re-signing if necessary.',
  },
  {
    label:
      'How does HashGuard Media ensure the signature survives through social media compression?',
    content:
      "HashGuard Media employs robust steganography techniques designed to survive typical social media compression algorithms. However, to maintain the highest integrity of the signature, it's recommended to use the highest quality settings available when uploading or sharing content on social media platforms.",
  },
  {
    label:
      'Can HashGuard Media detect if an image has been tampered with due to compression or resizing?',
    content:
      "Yes, part of HashGuard Media's verification process involves checking for any discrepancies between the expected signature and the current state of the image. Any significant alteration, including those caused by compression or resizing, would be detected during verification, indicating potential tampering.",
  },
  {
    label: 'How does dynamic watermarking work?',
    content:
      'Dynamic watermarking allows HashGuard Media to embed watermarks that can change based on certain conditions, offering adaptable protection that is more resilient to removal or manipulation.',
  },
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
          <Button href="/register" color="blue" className="mt-10">
            Learn more about our project
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <ul
            role="list"
            className="mx-auto flex max-w-2xl flex-col gap-8 lg:max-w-none"
          >
            <ClientDisclosure faqs={faqs.filter((_, i) => i % 2 === 0)} />
          </ul>
          <ul
            role="list"
            className="mx-auto flex max-w-2xl flex-col gap-8 lg:max-w-none"
          >
            <ClientDisclosure faqs={faqs.filter((_, i) => i % 2 === 1)} />
          </ul>
        </div>
      </Container>
    </section>
  )
}
