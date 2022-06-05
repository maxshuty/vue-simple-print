# Vue Simple Print

This is a Vue2 plugin (easily upgradeable to support Vue3+, just open an issue if the need is there I will do it) that allows you to easily print contents of a specified element. The element **can** be hidden either through `display: none` or `visibility: hidden` and the plugin will still print the contents of the element.

This package has originated from [vue-html-to-print](https://www.npmjs.com/package/vue-html-to-print) and that package originated from [vue-html-to-paper](https://github.com/mycurelabs/vue-html-to-paper).

## Why do we need a third option?!

This solution builds upon the previous two solutions by adding additional options like `useExistingStylesheets`, allowing selection of any valid CSS selector instead of only `id` attributes, like `div[someAttribute="print"]` or any other selector. It also provides minified/uglified files, and other code improvements on the two solutions above.

## O

