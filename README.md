# Vue js

## Instalation and new project

``` bash

# Last version vue-cli
npm install --global vue-cli

# Create new project with webpack
vue init webpack my-project

# Install dependencies
cd my-project
npm install

# Run serve
npm run dev


```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```


## Events

``` bash

# emit basic events
v-on: click/submit/keyup = "enter your text"

# emit my event
this.$root.$emit('myEvent', 'enter your text');

# listen my event
this.$root.$on('myEvent', (text) => { // here you need to use the arrow function})

```
