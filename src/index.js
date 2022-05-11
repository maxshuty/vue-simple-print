function addExistingStyles(iframeContentWindow) {
  // Querying the existing document for all possible stylesheets and adding them to the iframe
  const styleSheets = Array.from(
    document.querySelectorAll('link[rel="stylesheet"]')
  ).map((link) => link.href);
  addStyles(iframeContentWindow, styleSheets);

  // Adding the <style> elements to the iframe
  const styleEls = document.querySelectorAll('style');
  styleEls.forEach((styleEl) => {
    // If you don't clone the node then it will remove it from the
    // original document and copy it to the iFrame which we do not want.
    // We only want a copy of it for the iFrame
    iframeContentWindow.document.head.append(styleEl.cloneNode(true));
  });
}

function addStyles(iframeContentWindow, styles) {
  styles.forEach((style) => {
    let link = iframeContentWindow.document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', style);
    iframeContentWindow.document
      .getElementsByTagName('head')[0]
      .appendChild(link);
  });
}

const SimplePrint = {
  install(Vue, options = {}) {
    Vue.prototype.$simplePrint = (selector, localOptions, cb = () => true) => {
      let {
        name = '_blank',
        specs = ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes'],
        replace = true,
        useExistingStylesheets = false,
        styles = ['../'],
      } = options;

      // Overriding default options if local options have been provided
      // local options are passed in when the plugin is called
      // options are passed in when the plugin is *created*
      if (!!localOptions) {
        if (localOptions.name) {
          name = localOptions.name;
        }

        if (localOptions.specs) {
          specs = localOptions.specs;
        }

        if (localOptions.replace) {
          replace = localOptions.replace;
        }

        if (localOptions.useExistingStylesheets) {
          useExistingStylesheets = localOptions.useExistingStylesheets;
        }

        if (localOptions.styles) {
          styles = localOptions.styles;
        }
      }

      specs = !!specs.length ? specs.join(',') : '';

      const elementToPrint = window.document.querySelector(selector);
      if (!elementToPrint) {
        console.error(
          `SimplePrint: could not find the element to print by selector: ${selector}.
          Are you sure this element exists on the page at the time you called $simplePrint?`        );
        
