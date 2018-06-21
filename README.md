# Async Error Catcher

## Usage

### Wrapping one function in a object

* Without the Catcher

```js
const fetch = require('fetch');

try {
  const result = fetch.get('http://localhost:3000/users');
} catch (e) {
  console.log(e)
}

```

* With the catcher

```js
const { catcher } = require('async-error-catcher');
const fetch = require('fetch');

const result = catcher(fetch.get)('http://localhost:3000/users')
```

### Wrapping multiple function in a object

* For example, fetch has multiple async functions.

```obj
fetch = {
  get: () => {},
  post: () => {},
  patch: () => {},
}
```

```js
const { catchers } = require('async-error-catcher');

const wrappedFetch = catchers(fetch);

wrappedFetch.get('http://localhost:3000/users');
wrappedFetch.post('http://localhost:3000/users');
wrappedFetch.patch('http://localhost:3000/users');
```