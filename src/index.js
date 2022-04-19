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
}

}
