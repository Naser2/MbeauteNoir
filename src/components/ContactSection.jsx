import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 lg:rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="!text-left font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell us about your project
            </h2>
            <div className="mt-6 flex gap-x-4">
              <Button href="/contact" invert className="!bg-black text-white">
                Say Hi
              </Button>
              <Button href="/contact" invert className="!bg-black text-white">
               Contact
              </Button>
              <Button href="/contact" invert className="!bg-black text-white">
               Get work done
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 lg:pt-10  rounded-2xl ">
              <h3 className="font-display text-base font-semibold text-white px-4 py-4 ">
                Our offices
              </h3>
              <Offices
                invert
                className="mt-0 grid grid-cols-1 gap-8 sm:grid-cols-2 px-4 py-4"
              />
            </div>
            <h3 class="font-display text-base font-semibold text-white px-4 py-4 ">Call
             <Button href="/contact" invert className="!bg-black text-white">
              646-882-3778
              </Button></h3>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}


export function GiftCardSection() {
  return (
    <div className="mx-auto mt-14 sm:mt-32 lg:mt-20 mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center mb-12 font-display text-2xl font-semibold text-neutral-950">Treat or suprise a friend.</h2>
      <FadeIn className="-mx-6">
        <div className="mx-auto max-w-4xl">
          <div className="lg:rounded-4xl overflow-hidden">
            {/* <h2 className="!text-left font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
        Gist Card
            </h2> */}
            <div className='px-6 py-4 sm:mx-0 sm:py-8 md:px-12 border-b border-orange-300 bg-[#6420ff] bg-[rgb(137,96,86)]'>
                <h1 class="product-details__product-title ec-header-h3   font-display text-2xl font-semibold !text-white" itemprop="name">Gift Card 
               <br/>
               <div className='inline-flex'>
                <span className='text-sm mr-4'>4 payments With</span>
                <span><img className="sezzle-logo szl-light-image" src="https://media.sezzle.com/branding/2.0/Sezzle_Logo_FullColor.svg" alt="Sezzle"
                 style={{height:' 18px', width:' 72px'}}
                 ></img></span></div>
                
                <div class="hc-widget"><div data-hc="product-summary" data-hc-id="477306468"
                      class="hc-theme__light hc-theme__border_style-rounded hc-theme__shadow_style-shadow"><div class="hc-product-summary hc-product-summary--auto">
                  <div class="hc-product-summary__reviews"><span class="hc-product-summary__rating"><div class="hc-tooltip">
                    <span class="hc-stars">
                      <div class="flex items-center">
                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4  text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                      <p class="ml-2 text-sm font-medium text-[#f5deb3]">4.95 out of 5</p>
                      </div>
                        {/* <svg class="hc-icon   hc-icon--star-o hc-icon--lg" height="1em" viewBox="0 0 1792 1792" width="1em" xmlns="http://www.w3.org/2000/svg"><g transform=""><path d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" fill="#FFC535"></path><rect class="hc-icon__transparent-background"></rect></g></svg><svg class="hc-icon   hc-icon--star-o hc-icon--lg" height="1em" viewBox="0 0 1792 1792" width="1em" xmlns="http://www.w3.org/2000/svg"><g transform=""><path d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" fill="#FFC535"></path><rect class="hc-icon__transparent-background"></rect></g></svg><svg class="hc-icon   hc-icon--star-o hc-icon--lg" height="1em" viewBox="0 0 1792 1792" width="1em" xmlns="http://www.w3.org/2000/svg"><g transform=""><path d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" fill="#FFC535"></path><rect class="hc-icon__transparent-background"></rect></g></svg><svg class="hc-icon   hc-icon--star-o hc-icon--lg" height="1em" viewBox="0 0 1792 1792" width="1em" xmlns="http://www.w3.org/2000/svg"><g transform=""><path d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" fill="#FFC535"></path><rect class="hc-icon__transparent-background"></rect></g></svg><svg class="hc-icon   hc-icon--star-o hc-icon--lg" height="1em" viewBox="0 0 1792 1792" width="1em" xmlns="http://www.w3.org/2000/svg"><g transform=""><path d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" fill="#FFC535"></path><rect class="hc-icon__transparent-background"></rect></g></svg> */}
                  </span> 
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        </h1>
    </div>
            {/* <div className="mt-6 flex gap-x-4">
              <Button href="/contact" invert className="!bg-black text-white">
                Say Hi
              </Button>
              <Button href="/contact" invert className="!bg-black text-white">
               Contact
              </Button>
              <Button href="/contact" invert className="!bg-black text-white">
               Get work done
              </Button>
            </div> */}
            <div className="bg-[#faebd7] px-4 py-4 sm:mx-0 sm:py-8 md:px-12">
              {/* <h3 className="font-display text-base font-semibold text-white px-4 py-4 ">
                Our offices
              </h3> */}
              <Offices
                invert
                className="mt-0 grid grid-cols-1 gap-y-8 sm:grid-cols-2 py-4"
              />

            </div>
            {/* <h3 class="font-display text-base font-semibold text-white px-4 py-4 ">Call
             <Button href="/contact" invert className="!bg-black text-white">
              646-882-3778
              </Button></h3> */}
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
