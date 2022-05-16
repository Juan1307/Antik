const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    screens: {
      xs: '376px',
      ssm: '650px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        mono: ['"Ubuntu Mono"', ...defaultTheme.fontFamily.mono],
        // sans: ['"Maven Pro"', ...defaultTheme.fontFamily.sans],
        major: ['Major', 'monospace']
      },
      colors: {
        skin: {
          // skin background
          primary:'var(--color-bg-primary)',
          'primary-sub': 'var(--color-bg-primary-sub)',
          secondary: 'var(--color-bg-secondary)',
          'secondary-sub': 'var(--color-bg-secondary-sub)',
          third: 'var(--color-bg-third)',
          'third-sub': 'var(--color-bg-third-sub)',
          
          // via unique
          'via-third':'var(--color-bg-third-sub) 15%',

          // skin optional
          white: 'var(--color-bg-white)',
          black: 'var(--color-bg-black)',
          alpha: 'var(--color-bg-alpha)',
          light: 'var(--color-bg-light)',
          'light-sub': 'var(--color-bg-light-sub)'
        }
      },
      textColor: {
        skin: {
          // skin base
          base: 'var(--color-text-base)',
          'base-sub': 'var(--color-text-base-sub)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
          'inverted-sub': 'var(--color-text-inverted-sub)'
        }
      },
      backgroundColor: {
        skin: {
          // skin backgorund
          primary:'var(--color-bg-primary)',
          'primary-sub': 'var(--color-bg-primary-sub)',
          secondary: 'var(--color-bg-secondary)',
          'secondary-sub': 'var(--color-bg-secondary-sub)',
          third: 'var(--color-bg-third)',
          'third-sub': 'var(--color-bg-third-sub)'
        }
      },
      gradientColorStops: {
        skin: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)'
        }
      },
      backgroundSize: {
        full: '1000% 100%'
      },
      keyframes:{
        blink: {
          '50%': { 'border-color': 'transparent' }
        },
        slide:{
          '0%': {
            'background-position': '100%'
          },
          '100%':{
            'background-position': '0'
          }
        }
      },
      animation:{
        blink: 'blink .8s infinite',
        slide: 'slide .8s linear infinite'
      }
    },
  },
  plugins: [
  ],
}
