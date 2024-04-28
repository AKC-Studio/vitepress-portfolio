import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-portfolio/',
  title: "Ian Dev",
  description: "Portfolio",
  lastUpdated: true,
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/vitepress-portfolio/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/vitepress-portfolio/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/vitepress-portfolio/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/vitepress-portfolio/assets/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/vitepress-portfolio/assets/favicons/safari-pinned-tab.svg", color: "#5bbad5"}],
    ['link', { rel: "shortcut icon", href: "/vitepress-portfolio/assets/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#5bbad5"}],
    ['meta', { name: "msapplication-config", content: "/vitepress-portfolio/assets/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/favicons/android-chrome-512x512.png',
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
          { text: 'My CV', link: 'https://akcstudio.github.io/vitepress-portfolio/assets/cvsamples.pdf', target: '_blank' },
        ]
      },
      {
        text: 'What I do',
        items: [
          { text: 'About my work', link: '/my-work' },
          { text: 'Gallery', link: '/gallery' },
          { text: 'My links', link: '/links' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AKCStudio/vitepress-portfolio' }
    ]
  }
})
