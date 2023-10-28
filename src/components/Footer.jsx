import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'WORK',
    links: [
      { title: 'Porfolio', href: 'https://mbeautehair.glossgenius.com/portfolio' },
      { title: 'Services', href: 'https://mbeautehair.glossgenius.com/services' },
     
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: 'https://mbeautehair.glossgenius.com/services',
      },
    ],
  },
  {
    title: 'MBEAUTENOIR',
    links: [
      { title: 'About', href: 'https://mbeautehair.glossgenius.com/about' },
   
      { title: 'Contact', href: 'https://mbeautehair.glossgenius.com/contact' }, 
        { title: 'Shop With Us', href: '/process' },
    ],
  },
  {
    title: 'SOCIAL',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section) => (
          <li key={section.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link) => (
                <li key={link.title} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-black ring-purple-100 ring-2  text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <div as="footer" className="pt-12 w-full md:mt-0 lg:mt-10 mx-auto max-w-none border-b-[0.17em] border-b border-purple-600">
   
     <div className="bg-[rgb(137 96 86 / 7%)] max-[700px]:-pt-[15%] -pt-[15%] max-w-7xl">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 px-6 lg:px-8 ">
          <Navigation />
        </div>
        <div className="lg:!hidden mb-[0] mt-14 flex-wrap items-end justify-between gap-x-6 gap-y-4 pt-0 border-t border-neutral-950/10 pt-12 bg-[#faebd7]">
          {/* <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link> */}
     <div className=" px-6 justify-center !pt-8 lg:px-8 bg-[black] lg:!bg-white !h-[8em] py-[5%] pt-[10%] max-[700px]:pt-[3%]  max-[700px]:py-[2%]   md:!px-[10%] lg:!px-[22%] xl:!px-[20%]"  style={{position: 'relative' , display: 'block' ,'pointer-events': 'auto', 'z-index': 9, visibility: 'visible', perspective: '601px'}}>
     <h2 className='inline-flex text-white lg:text-black  text-center  !w-[100%]  !text-[2.04em]  lg:text-black md:!text-[4em] md:text-center  lg:text-[9em] xl:!text-[6em] xl:!py-14 max-w-3xl !font-bold signature-font  animated-logo'
     >
       ✨ MBEAUTé NOIR ✨</h2>
       {/* <p className="float-right text-right text-sm text-neutral-700 items-end ">
            © NasDesign Inc. {new Date().getFullYear()}
          </p> */}
     </div> 
          {/* <p className="float-right text-right text-sm text-neutral-700 items-end px-6 lg:px-8  ">
            © NasDesign Inc. {new Date().getFullYear()}
          </p> */}
        </div>
      </FadeIn>
      </div>
      <div className="mb-[0] flex-wrap items-end justify-between gap-x-6 gap-y-4 pt-4 border-t border-neutral-950/10  bg-[#faebd7]">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          </div>
    </div>
  )
}
