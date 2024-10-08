// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atlas Software',
  tagline: 'Quality in codeblocks',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://atlassoftware.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'atlas-software-dev', // Usually your GitHub org/user name.
  projectName: 'atlas-software-dev.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'br',
    locales: ['br','en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        style: 'dark',
        title: 'Atlas Software',
        logo: {
          alt: 'Atlas Software Logo',
          src: 'img/atlas-logo-menu.png',
        },
        items: [
          {to: '/rpg-manager', label: 'RPG Manager', position: 'left'},
          {label: 'Team', position: 'left', items: [
            {href: 'http://albertklik.github.io', label: 'Paulo Figueiro'},
            {to: '/team/locutorbubu', label: 'Locutorbubu'}
          ]},
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          
          //{to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/atlas-software-dev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Redes',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
               {
                 label: 'Discord',
                 href: 'https://discord.gg/5aYKVh3vqQ',
               },
              {
                label: 'Twitter',
                href: 'https://twitter.com/rpg_atlas',
              },
              {
                label: 'Bluesky',
                href: 'https://atlassoftware.bsky.social',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/atlas-software-dev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Atlas software, Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
