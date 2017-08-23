const files = require.context('.', true, /^(?!\.\/node_modules|\.\/docs).*\/index\.vue$/)
const modules = []

files.keys().forEach((key) => {
  modules.push(files(key).default)
})

const pkg = require('./package.json')

require('./Styles/index.css')

// export as vue plugin
export default {
  list: modules,
  version: pkg.version,
  install (Vue) {
    modules.forEach(mod => {
      Vue.component(mod.name, mod)
    })
  }
}

export const list = modules
