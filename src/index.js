function addExistingStyles(iframeContentWindow) {
  // Querying the existing document for all possible stylesheets and adding them to the iframe
  const styleSheets = Array.from(
    document.querySelectorAll('link[rel="stylesheet"]')
  ).map((link) => link.href);
  addStyles(iframeContentWindow, styleSheets);

}


}
