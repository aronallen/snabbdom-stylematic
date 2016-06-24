# snabbdom-stylematic
A Stylematic module for Snabbdom.

Stylematic lets you use inline css with all the nesting power of stylesheets, :states, ::pseudo-selectors, @animations, and @media-queries.
Read more about stylematic [here](https://github.com/rtsao/stylematic)

## Usage

This module must be loaded before `snabdom/modules/class` when creating the patch function.

### Setting Up

```javascript
import snabbdom from 'snabbdom';
import snabbDomstylematic from '../index.js';
import snabbdomClass from 'snabbdom/modules/class';

const patch = snabbdom.init([
  stylematic, // must be before class module
  snabbdomClass,
]);
```


### Usage

This module leverages the style attribute. It does not create inline styles, but dynamically creates a class based on the contents.

```javascript
h('div', {style : {border : '1px solid red'}, []});
```

If the reference of a new style object is `===` to the previous style object no new class will be made.
It is recomended to declare your styles in the root scope of your component, and possible variations, to avoid flooding the application with duplicate styles.

```javascript
const style = {
  border : '1px solid red'
}

/// later in your execution...

h('div', {style}, []);

```


### Clean up

There is no clean up, styles are appended to a style tag in the <head> section, and this is never cleared.
