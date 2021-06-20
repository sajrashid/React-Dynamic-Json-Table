const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'My App',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'My App',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\Me\\source\\repos\\hooks\\hookstest',
          templates:
            'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\.docz',
          cache:
            'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\.docz\\.cache',
          app: 'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\.docz\\app',
          appPackageJson:
            'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\package.json',
          appTsConfig:
            'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\.docz\\app\\index.html',
          db:
            'C:\\Users\\Me\\source\\repos\\hooks\\hookstest\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
