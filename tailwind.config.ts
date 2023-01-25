import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Geramond', 'sans-serif'],
      serif: ['serif']
    },
    extend: {
      colors: {
        'example-dark-rosa': '#693A44',
      }
    }
  }
}
