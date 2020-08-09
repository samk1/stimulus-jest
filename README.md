# Stimulus helpers for jest (or jest helpers for stimulus)

This package provides some helper functions for testing stimulus controllers.

## Setup

Install these packages:

```
yarn add --dev mutationobserver-shim @babel/core @babel/plugin-transform-runtime @babel/preset-env babel-jest
```

Add this to your jestSetup.js. Stimulus uses the mutation observer API and jsdom doesn't currently support this.

```
//jestSetup.js
import "mutationobserver-shim";
```

Finally, make sure you've configured babel:

```
//.babelrc
{
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime"
  ],
  "presets": [
    "@babel/preset-env"
  ]
}
```

## Examples

See examples/ in this repository for an example where we test stimulus's 'Hello World' controller.

## API

### `stimulusFixture(html, controllerClass)`

Sets the document HTML to the provided argument and registers the provided controller class. The `connect()` method of the controller will run.

Example:
```
  beforeEach(() =>
    stimulusFixture(
      `
      <div data-controller="hello">
        <h1 data-target="hello.output"></h1>
      </div>
    `,
      HelloController
    )
  );
```

### `documentHtml()`

Returns the current HTML content of the document. Useful for snapshot testing:

```
expect(documentHtml()).toMatchInlineSnapshot(
  `
  "<div data-controller=\\"hello\\">
    <h1 data-target=\\"hello.output\\">Hello, Stimulus!</h1>
  </div>"
`
);
```

### Issues, Feedback, Comments:

Please post everything to issues! Thankyou.
