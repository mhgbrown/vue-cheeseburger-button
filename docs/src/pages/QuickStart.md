# Quick Start

## Install (without npm)

Clone the Git repository of this library and link it.

```bash
git clone https://github.com/mhgbrown/vue-cheeseburger-button.git
cd vue-cheeseburger-button
npm install
npm run build
npm link
```

In your client project root folder:
```bash
npm link vue-cheeseburger-button
```

## Use the library

```javascript
import Vue from 'vue'
import * as VueCheeseburgerButton from 'vue-cheeseburger-button'

Vue.use(VueCheeseburgerButton);
```

### No Conflict

All components will be installed with no prefix by default, you can add any prefix
to them to avoid conflicts with other libs if needed.

For example:

```javascript
Vue.use(VueCheeseburgerButton, { prefix: 'abc' });
```

Results in:

* Components such as `<cheeseburger-button>` becomes `<abc-cheeseburger-button>`
