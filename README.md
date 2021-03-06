# Vue Simple Print

This is a Vue2 plugin (easily upgradeable to support Vue3+, just open an issue if the need is there I will do it) that allows you to easily print contents of a specified element. The element **can** be hidden either through `display: none` or `visibility: hidden` and the plugin will still print the contents of the element.

This package has originated from [vue-html-to-print](https://www.npmjs.com/package/vue-html-to-print) and that package originated from [vue-html-to-paper](https://github.com/mycurelabs/vue-html-to-paper).

## Why do we need a third option?!

This solution builds upon the previous two solutions by adding additional options like `useExistingStylesheets`, allowing selection of any valid CSS selector instead of only `id` attributes, like `div[someAttribute="print"]` or any other selector. It also provides minified/uglified files, and other code improvements on the two solutions above.

## Options

`useExistingStylesheets`: (default `false`). When `true` the plugin will add all of the existing styles and stylesheets from the current page into the printed page. This can be useful if you have custom styling that you want to be applied to the printed document. This will also apply `scoped` styles!

[Demo](https://codepen.io/Niickles/pen/podeVrL)

## Installation

Run the following command
`npm install simply-print-vue`

Usage inside `main.js`

```
import Vue from 'vue';
import SimplePrint from 'simply-print-vue';


Vue.use(SimplePrint);
// Alternatively you can pass global options in like this: Vue.use(SimplePrint, { yourOptions: here })
```

When imported inside of your `main.js` file, the mixin is callable from your component

```
<template>
  <div>
    <div>
      <h1>Awesomesauce Page</h1>
    </div>

    <!-- The printable element with the desired contents -->
    <div id="print">
      <p>I'd like to print this paragraph</p>
    </div>

    <button @click="print">Print Paragraph</button>
  </div>
<template>

<script>
  export default {
    methods: {
      print() {
        // Pass your selector in, it can be any valid `querySelector` selector
        async () => await this.$simplePrint('#print');
      }
    }
  }
</script>
```

Optionally you can apply different options from the global options with each call by defining local options like htis:

```
this.$simplePrint('print', { localOptions: here });
```
