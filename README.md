TigerUI
========

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/89ae9b9342a44917b82c9b1c1d9bc712)](https://www.codacy.com/app/ijse/tiger-ui?utm_source=github.com&utm_medium=referral&utm_content=tigerbrokers/tiger-ui&utm_campaign=badger)
[![Build Status](https://travis-ci.org/tigerbrokers/tiger-ui.svg?branch=master)](https://travis-ci.org/tigerbrokers/tiger-ui)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftigerbrokers%2Ftiger-ui.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftigerbrokers%2Ftiger-ui?ref=badge_shield)



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

# Test

Run all tests:
```bash
> yarn test
```

Run test for some component:
```bash
> yarn test Example Button
```

# Not fit your needs?

Clone and make contribution, submit your PRs.

# License

MIT



[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftigerbrokers%2Ftiger-ui.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftigerbrokers%2Ftiger-ui?ref=badge_large)