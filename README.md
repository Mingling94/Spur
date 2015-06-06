# Spur
Find and share spontaneous moments
AngelHack Boston 2015 Project

- [Features](/FEATURES.md)

## Install

1. Install [node.js](https://nodejs.org) (`brew install node`).
2. Clone this repository
3. `npm install`

## Run it locally

`npm run dev`

Runs our server with [node-supervisor](https://github.com/isaacs/node-supervisor) to restart when any javascript changes, and a [webpack hot loader](https://github.com/gaearon/react-hot-loader) that pushes the compiled javascript bundle into the client via websockets, for fast incremental live-reload.

## CSS/JS Builds

`npm run build`

Runs [webpack](http://webpack.github.io) to generate a production build. This minifies the javascript and uses static analysis to perform dead code elimination, which reduces our total bundle considerably, especially when requiring large libraries like moment.js.

Which will generate the proper webpack bundle. Then run `npm run prod`.

## Tests

`npm run test`

Runs all [jest](https://facebook.github.io/jest/) unit tests within `__tests__` directories.

## Linting & Style Checking

`npm run lint`

Runs [eslint](https://github.com/eslint/eslint). The eslint config is stored as `"eslintConfig"` within `package.json`, and is configured to work with both ES6 and JSX.
