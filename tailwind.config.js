/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        pastel: {
          blue: '#B6D1D9',
          gray: '#CCC6C6',
          pink: '#FFEEF4',
        },
        brand: {
          primary: '#B6D1D9',
          secondary: '#CCC6C6',
          accent: '#FFEEF4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            lineHeight: '1.75',
            h1: {
              color: '#1f2937',
              fontWeight: '700',
            },
            h2: {
              color: '#1f2937',
              fontWeight: '600',
            },
            h3: {
              color: '#374151',
              fontWeight: '600',
            },
            strong: {
              color: '#1f2937',
              fontWeight: '600',
            },
            a: {
              color: '#0ea5e9',
              textDecoration: 'underline',
              '&:hover': {
                color: '#0284c7',
              },
            },
            blockquote: {
              borderLeftColor: '#B6D1D9',
              backgroundColor: '#f8fafc',
            },
            code: {
              backgroundColor: '#f1f5f9',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

module.exports = config;


