TigerUI
========

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/89ae9b9342a44917b82c9b1c1d9bc712)](https://www.codacy.com/app/ijse/tiger-ui?utm_source=github.com&utm_medium=referral&utm_content=tigerbrokers/tiger-ui&utm_campaign=badger)

UIKit for Tigerbrokes Apps.

Preview and docs: https://tigerbrokers.github.io/tiger-ui

# Install

```bash
> npm install --save-dev @tigerbrokers/tiger-ui
```

Import all components:
```js
import Vue from 'vue'
import TigerUI from '@tigerbrokers/tiger-ui'
Vue.use(TigerUI)
```

Use single component:
```js
import Example from '@tigerbrokers/tiger-ui/Example'

new Vue({
  name: 'MyApp',
  components: { Example }
})
```

# Contribute

### Clone and launch localy:
```bash
> git clone git@github.com:tigerbrokers/tiger-ui.git
> cd tiger-ui
> git checkout -b <my-feature-branch>
> yarn
> yarn start
```

### Create new component folder
```bash
> mkdir MyComponent
> touch index.vue
> touch play.js
```

### Build and update docs
```bash
> yarn build
> git push -u origin <my-feature-branch>
```
then create Pull Request.

# Not fit your needs?

Clone and make contribution, submit your PRs.

# License

MIT

