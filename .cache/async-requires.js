// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("/Users/alexxx/Documents/work/portfolio/victorinspace.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/alexxx/Documents/work/portfolio/victorinspace.github.io/.cache/data.json")

