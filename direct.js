// Redirect the user to chrome language.
const language = window.navigator.language.replace('-', '_');
window.open(`${language}-rodem.html`, "_self");