// ==UserScript==
// @name        moodle extract ID Parameter
// @namespace   moodle extract ID Parameter
// @match       https://moodle.bbbaden.ch/mod/quiz/view.php*
// @version     1.0.1
//
// @downloadURL https://github.com/BBBaden-Moodle-userscripts/moodle-extract-ID-Parameter/raw/main/moodle-extract-ID-Parameter.user.js
// @updateURL   https://github.com/BBBaden-Moodle-userscripts/moodle-extract-ID-Parameter/raw/main/moodle-extract-ID-Parameter.user.js
// @homepageURL https://github.com/BBBaden-Moodle-userscripts/moodle-extract-ID-Parameter
// @supportURL  https://github.com/BBBaden-Moodle-userscripts/moodle-extract-ID-Parameter/issues
//
// @description prints the ID parameter of the current URL to the console
// @author      black-backdoor (https://github.com/black-backdoor)
//
// @run-at      document-end
// @grant       none
// ==/UserScript==

function IDofLink (url) {
    // Extract the ID parameter from the URL
    var id = new URL(url).searchParams.get("id");

    return id;
}

var url = window.location.href;

var id = IDofLink(url);
console.log("course ID: " + id);
