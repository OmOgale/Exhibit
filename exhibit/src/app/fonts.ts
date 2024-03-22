// app/fonts.ts
import { Rubik, Tilt_Prism } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

const tiltPrism = Tilt_Prism({
  subsets: ['latin'],
  variable: '--font-tiltPrism',
})

export const fonts = {
  rubik,
  tiltPrism,
}
