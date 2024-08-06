// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/vars.css",
    "~/assets/css/base.css",
    "~/assets/css/vp-doc.css",
    "~/assets/css/override.css",
    '~/assets/css/pixel.css',
  ],
  modules: ["@nuxt/content", "@nuxthq/studio", "@nuxt/image"],
  routeRules: {
    "/": { prerender: true },
  },

  postcss: {
    plugins: {
      'postcss-prefix-selector': {
        prefix: ':not(:where(.vp-raw *))',
        includeFiles: [/vp-doc\.css/, /base\.css/],
        transform(prefix: string, _selector: string) {
          const [selector, pseudo = ''] = _selector.split(/(:\S*)$/)
  
          return selector + prefix + pseudo
        }
      },
      "@mekari/pixel3-postcss": {
        include: [
          "./layouts/**/*.{js,jsx,ts,tsx,vue}", // path where you develop pages
          "./pages/**/*.{js,jsx,ts,tsx,vue}", // path where you develop pages
          "./components/**/*.{js,jsx,ts,tsx,vue}" // path where you develop components
        ],
      },
    },
  },
});
