// ==UserScript==
// @name         Unhide Hidden Fields
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Unhide all hidden fields on a webpage
// @author       Opabinia
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function unhideHiddenFields() {
        // Get all input elements with type "hidden"
        const hiddenFields = document.querySelectorAll('input[type="hidden"]');

        // Loop through each hidden field and set its type to "text" to unhide it
        hiddenFields.forEach(field => {
            field.type = 'text';
            field.style.border = '1px solid red'; // Optional: add a red border to clearly mark unhidden fields
        });
    }

    // Execute the function on page load
    window.addEventListener('load', unhideHiddenFields);

    // Optional: Execute the function when the page content changes (e.g., when navigating within a single-page app)
    const targetNode = document.body;
    const config = { childList: true, subtree: true };
    const observer = new MutationObserver(unhideHiddenFields);
    observer.observe(targetNode, config);
})();
