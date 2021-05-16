const repoUrl = "https://github.com/ChilliCream/hotchocolate";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "ChilliCream GraphQL Platform",
  tagline: "We're building the ultimate GraphQL platform",
  url: "https://chillicream.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.png",
  organizationName: "ChilliCream",
  projectName: "hotchocolate",
  themeConfig: {
    navbar: {
      // todo: text in custom font
      title: "ChilliCream",
      logo: {
        alt: "ChilliCream Logo",
        // todo: animation is not working
        src: "img/chillicream-winking.svg",
      },
      items: [
        {
          to: "/docs/hotchocolate",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          label: `Shop`,
          to: `https://shop.chillicream.com`,
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "left",
          dropdownActiveClassDisabled: true,
        },
        {
          href: repoUrl,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Hot Chocolate",
              to: "/docs/hotchocolate",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: repoUrl,
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ChilliCream`,
    },
    prism: {
      additionalLanguages: ["csharp", "graphql", "json", "bash", "sql"],
      theme: require("prism-react-renderer/themes/vsDark"),
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "docs",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: repoUrl + "/edit/main/website2/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: "Preview 🚧",
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: repoUrl + "/edit/main/website2/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
