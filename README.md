TigerUI
========

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

