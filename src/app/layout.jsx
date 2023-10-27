import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'
// import { Sugela} from '../../public/fonts/sugelasugela-gowdq.ttf'
import styles from  '@/styles/base.css'
export const metadata = {
  title: {
    template: '%s - MbeauteNoir',
    default: ' NYC haircare specialist located in Harlem. Our goal is to promote clean beauty.',
  },
}
// const fancyfont = Sugela({src:'../../public/fonts/sugelasugela-gowdq.ttf'})
// const sugela = Sugela({
//   subset:['latin'],
//   weight:['400', '500', '600', '700', '800']
// })
export default function Layout({ children }) {
  // console.log("FANCY FONT" , fancyfont.classNaem)
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout className={styles.testFont}>{children}</RootLayout>
      </body>
    </html>
  )
}
