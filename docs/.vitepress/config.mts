import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-portfolio/',
  title: "Ian Dev",
  description: "Portfolio",
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
