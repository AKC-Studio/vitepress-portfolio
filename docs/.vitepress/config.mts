import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-portfolio/',
  title: "Ian Dev",
  description: "Portfolio",
  lastUpdated: true,
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#5bbad5"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#5bbad5"}],
    ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Me', link: '/me' },
      { text: 'Gallery', link: '/gallery' },
      { text: 'About', link: '/about' },
    ],

    sidebar: [
      {
        text: 'Who I am',
        items: [
          { text: 'About me', link: '/me' },
          { text: 'My influences', link: '/influences' },
          { text: 'My CV', link: 'https://akobashikawa.github.io/vitepress-portfolio/assets/cvsamples.pdf', target: '_blank' },
        ]
      },
      {
        text: 'What I do',
        items: [
          { text: 'About my work', link: '/my-work' },
          { text: 'My links', link: '/links' },
          { text: 'Gallery', link: '/gallery' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/akobashikawa/vitepress-portfolio' }
    ]
  }
})
