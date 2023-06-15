export default defineAppConfig({
  docus: {
    title: 'Frogge.Finance',
    description: 'Frogge.Finance documentation site',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'froggefinance',
      github: 'evm20/'
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: false,
      exclude: [],
      fluid: true
    },
    footer: {
      iconLinks: [
        {
          href: 'https://frogge.finance',
        }
      ]
    }
  }
})
