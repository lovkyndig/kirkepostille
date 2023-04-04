
module.exports = {
  darkMode: 'class',
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
    }
  },
  compilerOptions: {
    types: [
      'vite-plugin-pwa/client'
    ]
  }
}
