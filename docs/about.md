<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/akobashikawa.png',
    name: 'Antonio Kobashikawa',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/akobashikawa' },
      { icon: 'twitter', link: 'https://twitter.com/rulokoba' }
    ]
  },
]
</script>

# About this site

## Author

<VPTeamMembers size="small" :members="members" />
- [AKC Studio](https://akcstudio.com)

## Software

- VitePress

## Services

- GitHub Pages

## Attributions

- <a href="https://www.vecteezy.com/free-vector/development">Development Vectors by Vecteezy</a>

- [Favicon Generator for perfect icons on all browsers](https://realfavicongenerator.net/)