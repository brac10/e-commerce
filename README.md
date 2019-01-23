# We are excited a new tutorial from the team at Ranger-PI

React, bootstrap, styled Components, conditional rendering all on a Raspberry PI

Part of the `Bring your Pi` to Work day and making Fridays an opportunity to push learning to a new level.</p>

## \*\*\*\*Architecture

![ScreenShot](public/Architecture.png "Architecture")

Create React App is divided into two packages:

- `create-react-app` is a global command-line utility that you use to create new projects.
- `e-commerce` is the local stand-one application used for this training exercise.

e-commerce/
README.md
..node_modules/
..package.json
..public/
..index.html
..favicon.ico
....src/
......./components
......./Cart
..App.css
..App.js
..context.js
..data.js
..App.test.js
..index.css
..index.js
..logo.svg
..serviceWorker.js

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. \*\*\*\*
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](#running-tests) for more information.

### `npm run build`

## Installing a Dependency

Finally, you will need to install some packages dependencies

```sh
npm install --save bootstrap
npm install --save react-paypal-express-checkout
```

## Importing a Component

This project setup supports ES6 modules thanks to Babel.
While you can still use `require()` and `module.exports`, we encourage you to use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html) instead.

For example:

### `ButtonComponent.js`

```js
import React, { Component } from "react";

class ButtonComponent extends Component {
  render() {
    <div className="container">"special rules for your button"</div>;
  }
}

export default ButtonComponent; // Don’t forget to use export as default if the behavior is universal!
```

### `DangerButton.js`

```js
import React, { Component } from "react";
import Button from "./Button"; // Import a component from another file

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
```

### Additional Components

Google Fonts:
Oswald
Permanent Marker
Font Awesome
Icon Finder
